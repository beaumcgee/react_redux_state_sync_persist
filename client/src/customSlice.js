
import { createSlice } from '@reduxjs/toolkit';

export const customSlice = createSlice({
    name: 'custom',
    initialState: {
        value1: 0,
        value2: 0
    },
    reducers: {
        setCustomValue1: (state, action) => {
            state.value1 = action.payload;
        },
        setCustomValue2: (state, action) => {
            state.value2 = action.payload;
        }
    }
})

export const { setCustomValue1, setCustomValue2 } = customSlice.actions;

export default customSlice.reducer
