import { createSlice } from "@reduxjs/toolkit";

export const LOADING = "loading";

const initialState = {
    loading: false
}
// will be needed for data fetching
const loadingSlice = createSlice({
    name: LOADING,
    initialState,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload
        }
    }
});

export const selectLoading = (state) => state[LOADING].loading;

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;