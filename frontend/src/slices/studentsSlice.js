import { createSlice } from '@reduxjs/toolkit';
import { students } from './data/dataStudents';

const initialState = {
    initialMass: students,
};

const studentsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        addStudents(state, { payload }) {
            state.initialMass.push(payload)
        }
    }
})

export const { actions } = studentsSlice;
export default studentsSlice.reducer;