import { createSlice } from '@reduxjs/toolkit';
import { initialMass } from './data/dataDeals';

const initialState = {
    initialMass: initialMass,
};

const dealsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        addDeals(state, { payload }) {
            state.initialMass.push(payload)
        }
    }
})

export const { actions } = dealsSlice;
export default dealsSlice.reducer;