import { createSlice } from "@reduxjs/toolkit";

export const FORM = "form";

const initialState = {
    email: "",
    name: "",
    message: ""
}

const formSlice = createSlice({
    name: FORM,
    initialState,
    reducers: {
        inputEmail(state, { payload }) {
            state.email = payload
        },
        inputName(state, { payload }) {
            state.name = payload
        },
        inputMessage(state, { payload }) {
            state.message = payload
        },
    }
});

export const email = (state) => state[FORM].email;
export const name = (state) => state[FORM].name;
export const message = (state) => state[FORM].message;

export const { inputEmail, inputMessage, inputName } = formSlice.actions;

export default formSlice.reducer;