// src/utils/ScrollRestoration.tsx
import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

type Props = {
	/** Опционально: id скролл-контейнера. По умолчанию — окно/документ. */
	targetId?: string;
};

function makeKey(pathname: string, search: string, hash: string) {
	return `${pathname}${search}${hash}`;
}

function getScrollNode(targetId?: string): Window | HTMLElement {
	if (targetId) {
		const el = document.getElementById(targetId);
		if (el) return el;
	}
	// document.scrollingElement надёжнее, чем window в некоторых браузерах
	return (document.scrollingElement as HTMLElement) || window;
}

function scrollToY(node: Window | HTMLElement, y: number) {
	// не указывать smooth — восстановление должно быть мгновенным
	if (node === window) {
		window.scrollTo(0, y);
	} else {
		(node as HTMLElement).scrollTo({ left: 0, top: y });
	}
}

export default function ScrollRestoration({ targetId }: Props) {
	const location = useLocation();
	const navType = useNavigationType(); // 'POP' | 'PUSH' | 'REPLACE'

	// Храним позиции между рендерами/роутами
	const positionsRef = useRef<Map<string, number>>(new Map());
	const prevKeyRef = useRef<string>(makeKey(location.pathname, location.search, location.hash));

	useEffect(() => {
		const scroller = getScrollNode(targetId);

		// 1) Сохраняем позицию для предыдущего маршрута
		const prevKey = prevKeyRef.current;
		const currentY = scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop;
		positionsRef.current.set(prevKey, currentY);

		// 2) Вычисляем ключ текущего маршрута
		const key = makeKey(location.pathname, location.search, location.hash);

		// 3) Восстанавливаем/сбрасываем скролл
		const restore = () => {
			if (navType === 'POP') {
				// Назад/вперёд — вернуть сохранённую позицию
				const y = positionsRef.current.get(key) ?? 0;
				scrollToY(scroller, y);
			} else if (location.hash) {
				// Переход с якорем — проскроллить к элементу
				const id = decodeURIComponent(location.hash.slice(1));
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
				} else {
					scrollToY(scroller, 0);
				}
			} else {
				// Обычная навигация — вверх
				scrollToY(scroller, 0);
			}
		};

		// Делаем сразу и дубль через rAF — на случай поздней загрузки контента/картинок
		restore();
		const raf = requestAnimationFrame(restore);

		// 4) На закрытие вкладки тоже сохраняем позицию
		const onBeforeUnload = () => {
			const y = scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop;
			positionsRef.current.set(key, y);
		};
		window.addEventListener('beforeunload', onBeforeUnload);

		// 5) Запоминаем текущий ключ как "предыдущий" для следующего эффекта
		prevKeyRef.current = key;

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('beforeunload', onBeforeUnload);
		};
		// Важно отслеживать pathname/search/hash и тип навигации
	}, [location.pathname, location.search, location.hash, navType, targetId]);

	return null;
}
