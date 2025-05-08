import React, { useState, useCallback, useMemo } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';

export default function LazyDataGridExample() {
  const [DataGridComponent, setDataGridComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(false);

  const rows = useMemo(
    () => [
      { id: 1, lastName: 'Doe', firstName: 'John' },
      { id: 2, lastName: 'Smith', firstName: 'Anna' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'firstName', headerName: 'First name', width: 150 },
      { field: 'lastName', headerName: 'Last name', width: 150 },
    ],
    []
  );

  const handleLoadTable = useCallback(async () => {
    setLoading(true);
    try {
      const { DataGrid } = await import('@mui/x-data-grid');
      setDataGridComponent(() => DataGrid);
    } catch (error) {
      console.error('Failed to load DataGrid:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Button variant='contained' onClick={handleLoadTable} disabled={loading}>
        Load Table
      </Button>

      {loading && <CircularProgress sx={{ ml: 2 }} />}

      {DataGridComponent && (
        <Box sx={{ height: 400, mt: 2 }}>
          <DataGridComponent rows={rows} columns={columns} />
        </Box>
      )}
    </Box>
  );
}
