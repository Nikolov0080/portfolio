import { createSlice } from "@reduxjs/toolkit";

export const TABS = "tabs";

const initialState = {
    path: "/"
}

const tabsSlice = createSlice({
    name: TABS,
    initialState,
    reducers: {
        changeTab(state, { payload }) {
            state.path = payload.path
        }
    }
});

export const selectedTab = (state) => state[TABS];

export const { changeTab } = tabsSlice.actions;

export default tabsSlice.reducer;