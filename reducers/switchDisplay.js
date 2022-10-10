import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        value: [],
};

export const switchDisplaySlice = createSlice({
        name: 'switchDisplay',
        initialState,
        reducers: {
                addSwitchToDislay: (state, action) => {
                        
                        state.value = action.payload;
                },
        },
});

export const { addSwitchToDislay} = switchDisplaySlice.actions;
export default switchDisplaySlice.reducer;