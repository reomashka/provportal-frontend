export const getAnnouncements = async () => {
	const response = await fetch(`/api/announcements`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка загрузки данных по новостям и обновлениям');
	}

	return resData;
};
