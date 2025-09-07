import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	value: string;
}

const initialState: FilterState = {
	value: 'asc',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState: initialState,
	reducers: {
		setAscOrder: (state) => {
			state.value = 'asc';
		},
		setDescOrder: (state) => {
			state.value = 'desc';
		},
	},
});

export const { setAscOrder, setDescOrder } = filterSlice.actions;
export default filterSlice.reducer;
