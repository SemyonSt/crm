import { createSlice } from '@reduxjs/toolkit';
import { teachers } from './data/dataTeachers';

const initialState = {
    initialMass: teachers,
};

const teachersSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        addTeachers(state, { payload }) {
            state.initialMass.push(payload)
        }
    }
})

export const { actions } = teachersSlice;
export default teachersSlice.reducer;