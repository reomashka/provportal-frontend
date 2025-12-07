import styles from './ItemsList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getAllItems } from '@/api/items/getAllItems';
// import { Banner } from '@components/Banner';
// import bank from '@/assets/banners/bank.jpg';
import { Currency, Item } from '@interfaces/Item.interface';
import {
	AccessoryCategoryLabels,
	AccessorySubtypeLabels,
	CurrencyLabels,
} from '@/constants/ItemLabels';
import { useEffect, useState } from 'react';
import { SearchInput } from '@components/SearchInput';
import placeholder from '@/assets/placeholder128.svg';
// import { FiltersAndSorts } from './components/FiltersAndSorts';

export const ItemList = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const { data: items } = useQuery({
		queryKey: ['announcement'],
		queryFn: getAllItems,
	});

	const filteredData = (items ?? []).filter((item: Item) =>
		item.itemName?.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const [activeId, setActiveId] = useState<number | null>(null);

	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash;

			if (hash.startsWith('#item-')) {
				const id = Number(hash.replace('#item-', ''));
				setActiveId(id);

				const el = document.getElementById(`item-${id}`);
				el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		};

		window.addEventListener('hashchange', handleHash);

		handleHash();
		if (items && window.location.hash) {
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}, [items]);

	return (
		<>
			<SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Поиск..." />

			<div className={styles.grid}>
				{filteredData
					?.sort((a: Item, b: Item) => a.itemId - b.itemId)
					.map((item: Item) => (
						<div
							key={item.itemId}
							className={`${styles.card} ${activeId === item.itemId ? styles.active : ''}`}
							id={`item-${item.itemId}`}>
							<div className={styles.imageContainer}>
								<img
									src={`/uploads/items/${item.itemId}.png`}
									alt={item.itemName}
									className={styles.image}
									sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
									onError={(e) => {
										(e.currentTarget as HTMLImageElement).src = placeholder;
									}}
								/>
							</div>
							<div className={styles.cardContent}>
								<h3 className={styles.itemName}>{item.itemName}</h3>
								<h1>{item.itemId}</h1>

								<div className={styles.metadata}>
									<div className={styles.metaItem}>
										<span className={styles.label}>Категория</span>
										<span className={styles.value}>
											{AccessoryCategoryLabels[item.itemCategory]}
										</span>
									</div>

									<div className={styles.metaItem}>
										<span className={styles.label}>Подтип</span>
										<span className={styles.value}>{AccessorySubtypeLabels[item.itemSubtype]}</span>
									</div>

									{item.eventId !== null && (
										<div className={styles.metaItem}>
											<span className={styles.label}>Ивент</span>
											<span className={styles.value}>{item.eventName}</span>
										</div>
									)}

									{item.itemCurrency === Currency.PUMPKINS && (
										<div className={styles.metaItem}>
											<span className={styles.label}>Цена</span>
											<span className={styles.value}>
												{item.itemPrice}. Валюта: <i>{CurrencyLabels[item.itemCurrency] || ''}</i>
											</span>
										</div>
									)}

									{/* <button onClick={() => handleCopyLink(item.itemId)} className={styles.copyButton}>
										Скопировать
									</button> */}
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
};
