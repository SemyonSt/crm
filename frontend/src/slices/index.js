import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './dealsSlice.js'


export default configureStore({
    reducer: {
        dealsReducer,
    },
  });