import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iframeState {
  isLoaderOn: boolean;
}

const initialState: iframeState = {
  isLoaderOn: false,
};

export const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    updateLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoaderOn = action.payload;
    },
  },
});

export const { updateLoader } = LoaderSlice.actions;

export default LoaderSlice.reducer;
