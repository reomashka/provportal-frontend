import { useState } from 'react';
import './DataGrid.scss';

type RowData = {
	id: number;
	[key: string]: any;
};

type Column = {
	field: string;
	headerName: string;
	width: number;
};

const initialColumns: Column[] = [
	{ field: 'id', headerName: 'ID', width: 80 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'email', headerName: 'Email', width: 250 },
];

const mockData: RowData[] = Array.from({ length: 25 }, (_, i) => ({
	id: i + 1,
	name: `User ${i + 1}`,
	email: `user${i + 1}@example.com`,
}));

const rowsPerPage = 5;

export const DataGridTransport = () => {
	const [columns, setColumns] = useState(initialColumns);
	const [rows, setRows] = useState<RowData[]>(mockData);
	const [page, setPage] = useState(0);
	const [editingCell, setEditingCell] = useState<{ rowId: number; field: string } | null>(null);

	const pagedRows = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

	const handleInputChange = (rowId: number, field: string, value: string) => {
		setRows((prev) => prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)));
	};

	const handleSave = async () => {
		console.log('Sending data to backend:', rows);
		await fetch('/api/save', {
			method: 'POST',
			body: JSON.stringify(rows),
			headers: { 'Content-Type': 'application/json' },
		});
	};

	const handleResize = (index: number, deltaX: number) => {
		setColumns((prev) =>
			prev.map((col, i) => (i === index ? { ...col, width: col.width + deltaX } : col)),
		);
	};

	return (
		<div className="data-grid dark">
			<div className="header">
				{columns.map((col, i) => (
					<div key={col.field} className="cell header-cell" style={{ width: col.width }}>
						{col.headerName}
						<div
							className="resizer"
							onMouseDown={(e) => {
								const startX = e.clientX;
								const onMouseMove = (e: MouseEvent) => {
									handleResize(i, e.clientX - startX);
								};
								const onMouseUp = () => {
									document.removeEventListener('mousemove', onMouseMove);
									document.removeEventListener('mouseup', onMouseUp);
								};
								document.addEventListener('mousemove', onMouseMove);
								document.addEventListener('mouseup', onMouseUp);
							}}
						/>
					</div>
				))}
			</div>

			<div className="body">
				{pagedRows.map((row) => (
					<div className="row" key={row.id}>
						{columns.map((col) => {
							const isEditing = editingCell?.rowId === row.id && editingCell?.field === col.field;

							return (
								<div
									key={col.field}
									className="cell"
									style={{ width: col.width }}
									onDoubleClick={() => setEditingCell({ rowId: row.id, field: col.field })}>
									{isEditing ? (
										<input
											value={row[col.field]}
											onChange={(e) => handleInputChange(row.id, col.field, e.target.value)}
											onBlur={() => setEditingCell(null)}
											autoFocus
										/>
									) : (
										row[col.field]
									)}
								</div>
							);
						})}
					</div>
				))}
			</div>

			<div className="footer">
				<button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
					Назад
				</button>
				<span>
					Page {page + 1} of {Math.ceil(rows.length / rowsPerPage)}
				</span>
				<button
					disabled={(page + 1) * rowsPerPage >= rows.length}
					onClick={() => setPage((p) => p + 1)}>
					Вперед
				</button>
				<button onClick={handleSave}>Сохранить</button>
			</div>
		</div>
	);
};
