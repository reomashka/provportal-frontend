import { GridColDef } from '@mui/x-data-grid';

const columnsData: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, editable: false },
  {
    field: 'nameAuto',
    headerName: 'Название',
    width: 150,
    editable: true,
  },
  {
    field: 'fullSpeed',
    headerName: 'Макс. скорость',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'speed100Time',
    headerName: '0-100',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'speedMaxTime',
    headerName: '0-MAX',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'volumeTank',
    headerName: 'Объем бака',
    width: 110,
    editable: true,
  },
  {
    field: 'costLiter',
    headerName: 'Цена за литр',
    width: 110,
    editable: true,
  },
];

export default columnsData;
