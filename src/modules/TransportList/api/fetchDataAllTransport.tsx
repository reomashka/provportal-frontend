import axios from 'axios';
import Transport from '@interfaces/Transport.interface';

const API_URL = 'http://localhost:3000/api/transport';

export const fetchDataAllTransport = async (order: string): Promise<Transport[]> => {
  try {
    const response = await axios.get<Transport[]>(
      `${API_URL}/get-all?order=${order}&class='cargo'`
    );
    return response.data;
  } catch (err) {
    console.error('Ошибка загрузки данных со стороны сервера:', err);
    throw new Error('Ошибка загрузки данных');
  }
};
