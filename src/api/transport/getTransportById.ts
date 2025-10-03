export const getTransportById = async (id: number) => {
	const response = await fetch(`/api/transport/get-one/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка получения информации о транспорте');
	}

	return resData;
};
