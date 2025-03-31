import axios from 'axios';

export const fetchAllTransport = async (order: string, transportClass: string) => {
  try {
    const { data } = await axios.get(
      `/api/transport/get-all?order=${order}&class=${transportClass}`
    );
    return { data, error: null };
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return { data: null, error };
  }
};
