import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        value: [],
};

export const updateSlice = createSlice({
        name: 'update',
        initialState,
        reducers: {
                addUpdateToStore: (state, action) => {
                        state.value.push(action.payload);
                },
        },
});

export const { addUpdateToStore } = updateSlice.actions;
export default updateSlice.reducer;