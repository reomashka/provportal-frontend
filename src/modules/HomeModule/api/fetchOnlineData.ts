export const fetchOnlineData = async () => {
	const response = await fetch(`/api/online`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка загрузки данных по онлайну серверов');
	}

	return resData;
};
