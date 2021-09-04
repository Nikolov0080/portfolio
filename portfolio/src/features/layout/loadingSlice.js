import { createSlice } from "@reduxjs/toolkit";

export const LOADING = "loading";

const initialState = {
    loading: true
}

const loadingSlice = createSlice({
    name: LOADING,
    initialState,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload
        }
    }
});

export const loading = (state) => state[LOADING].loading;
export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;