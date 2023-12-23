import { createSlice } from '@reduxjs/toolkit';
import { initialMass } from './dataDeals';

const initialState = {
    initialMass: initialMass,
};

const dealsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {

    }
})

export const { actions } = dealsSlice;
export default dealsSlice.reducer;