export const getAllItems = async () => {
	const response = await fetch(`/api/items`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка загрузки данных по айтемам');
	}

	return resData;
};
