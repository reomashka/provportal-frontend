import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { useEffect, useState } from 'react';
import Transport from '@interfaces/Transport.interface';

import fetchTransportData from '../api/DataGridTransportAPI';
import columnsData from '../utils/columnsData';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const DataGridTransport = () => {
  const [data, setData] = useState<Transport[]>([]);

  useEffect(() => {
    fetchTransportData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  const processRowUpdate = (newRow: Transport) => {
    setData((prevRows) => prevRows.map((row) => (row.id === newRow.id ? newRow : row)));
    return newRow;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columnsData}
          processRowUpdate={processRowUpdate}
          pageSizeOptions={[5]}
        />
      </div>
    </ThemeProvider>
  );
};
