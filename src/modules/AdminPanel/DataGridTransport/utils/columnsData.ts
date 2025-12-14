// import { ColumnDef } from '@tanstack/react-table';
// import Transport from '@/interfaces/Transport.interface';

// const columnsData: ColumnDef<Transport>[] = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//     cell: (info) => info.getValue(),
//   },
//   {
//     accessorKey: 'nameAuto',
//     header: 'Название',
//     cell: ({ row, getValue, column }) => (
//       <input
//         value={getValue() as string}
//         onChange={(e) => (row.original[column.id] = e.target.value)}
//       />
//     ),
//   },
//   {
//     accessorKey: 'fullSpeed',
//     header: 'Макс. скорость',
//     cell: ({ row, getValue, column }) => (
//       <input
//         type='number'
//         value={getValue() as number}
//         onChange={(e) => (row.original[column.id] = +e.target.value)}
//       />
//     ),
//   },
//   {
//     accessorKey: 'speed100Time',
//     header: '0-100',
//     cell: ({ row, getValue, column }) => (
//       <input
//         type='number'
//         value={getValue() as number}
//         onChange={(e) => (row.original[column.id] = +e.target.value)}
//       />
//     ),
//   },
//   {
//     accessorKey: 'speedMaxTime',
//     header: '0-MAX',
//     cell: ({ row, getValue, column }) => (
//       <input
//         type='number'
//         value={getValue() as number}
//         onChange={(e) => (row.original[column.id] = +e.target.value)}
//       />
//     ),
//   },
//   {
//     accessorKey: 'volumeTank',
//     header: 'Объем бака',
//     cell: ({ row, getValue, column }) => (
//       <input
//         value={getValue() as string}
//         onChange={(e) => (row.original[column.id] = e.target.value)}
//       />
//     ),
//   },
//   {
//     accessorKey: 'costLiter',
//     header: 'Цена за литр',
//     cell: ({ row, getValue, column }) => (
//       <input
//         type='number'
//         value={getValue() as number}
//         onChange={(e) => (row.original[column.id] = +e.target.value)}
//       />
//     ),
//   },
// ];

// export default columnsData;
