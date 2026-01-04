export interface ServerData {
	server: number;
	online: number;
	slots: number;
}
export const getOnlineData = async (): Promise<ServerData[]> => {
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
