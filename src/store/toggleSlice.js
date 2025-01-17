import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle: false,
};

const toggleSlice = createSlice({
    name: "toggle",
    initialState,

    reducers: {
        toggleActive: (state) => {
            state.isToggle = true
        },
        toggleDeactive: (state , action) => {
            state.isToggle = false
        }
    },
});

export const { toggleActive ,  toggleDeactive } = toggleSlice.actions;
export default toggleSlice.reducer;
