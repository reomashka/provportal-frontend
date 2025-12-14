import Transport from '@/interfaces/Transport.interface';

const fetchTransportData = async (): Promise<Transport[]> => {
	try {
		const response = await fetch('/api/transport/get-all');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data: Transport[] = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching transport data:', error);
		throw error;
	}
};

export default fetchTransportData;
