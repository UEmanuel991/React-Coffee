import {configureStore} from '@reduxjs/toolkit'
import {coffeSlice} from './coffeSlice'

const store = configureStore({
    reducer: {
        coffe: coffeSlice.reducer
    }
});
export default store;