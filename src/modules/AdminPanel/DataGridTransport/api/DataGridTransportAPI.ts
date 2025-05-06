import axios from 'axios';
import Transport from '@interfaces/Transport.interface';

const fetchTransportData = async (): Promise<Transport[]> => {
  try {
    const response = await axios.get('/api/transport/get-all');
    return response.data;
  } catch (error) {
    console.error('Error fetching transport data:', error);
    throw error;
  }
};

export default fetchTransportData;
