import Transport from '@/interfaces/Transport.interface';

export const getAllTransport = async (transportClass: string): Promise<Transport[]> => {
	const response = await fetch(`/api/transport?class=${transportClass}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка получения информации о транспорте');
	}

	return resData;
};

export const getCurrentTransport = async (id: number): Promise<Transport> => {
	const response = await fetch(`/api/transport/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка получения информации о транспорте');
	}

	return resData;
};
