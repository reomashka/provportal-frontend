import { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import Transport from '@interfaces/Transport.interface';
import fetchTransportData from '../api/DataGridTransportAPI';

export const DataGridTransport = () => {
  const [data, setData] = useState<Transport[]>([]);

  useEffect(() => {
    fetchTransportData()
      .then(setData)
      .catch((error) => console.error('Ошибка при получении данных:', error));
  }, []);

  const handleCellChange = (rowIndex: number, columnId: string, value: any) => {
    setData((prevData) =>
      prevData.map((row, idx) => (idx === rowIndex ? { ...row, [columnId]: value } : row))
    );
  };

  const columns: ColumnDef<Transport>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'nameAuto',
      header: 'Название',
      cell: ({ row, column, getValue }) => (
        <input
          value={getValue() as string}
          onChange={(e) => handleCellChange(row.index, column.id, e.target.value)}
        />
      ),
    },
    {
      accessorKey: 'fullSpeed',
      header: 'Макс. скорость',
      cell: ({ row, column, getValue }) => (
        <input
          type='number'
          value={getValue() as number}
          onChange={(e) => handleCellChange(row.index, column.id, Number(e.target.value))}
        />
      ),
    },
    {
      accessorKey: 'speed100Time',
      header: '0-100',
      cell: ({ row, column, getValue }) => (
        <input
          type='number'
          value={getValue() as number}
          onChange={(e) => handleCellChange(row.index, column.id, Number(e.target.value))}
        />
      ),
    },
    {
      accessorKey: 'speedMaxTime',
      header: '0-MAX',
      cell: ({ row, column, getValue }) => (
        <input
          type='number'
          value={getValue() as number}
          onChange={(e) => handleCellChange(row.index, column.id, Number(e.target.value))}
        />
      ),
    },
    {
      accessorKey: 'volumeTank',
      header: 'Объем бака',
      cell: ({ row, column, getValue }) => (
        <input
          value={getValue() as string}
          onChange={(e) => handleCellChange(row.index, column.id, e.target.value)}
        />
      ),
    },
    {
      accessorKey: 'costLiter',
      header: 'Цена за литр',
      cell: ({ row, column, getValue }) => (
        <input
          type='number'
          value={getValue() as number}
          onChange={(e) => handleCellChange(row.index, column.id, Number(e.target.value))}
        />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div style={{ padding: '16px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid gray',
                    padding: '8px',
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    borderBottom: '1px solid #444',
                    padding: '8px',
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '16px' }}>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Назад
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          style={{ marginLeft: '8px' }}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
};
