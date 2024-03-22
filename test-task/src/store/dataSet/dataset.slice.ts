import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iframeState {
  datasetList: [];
}

const initialState: iframeState = {
  datasetList: [],
};

export const DatasetSlice = createSlice({
  name: "dataset",
  initialState,
  reducers: {
    updateDatasetList: (state, action: PayloadAction<any>) => {
      state.datasetList = action.payload;
    },
  },
});

export const { updateDatasetList } = DatasetSlice.actions;

export default DatasetSlice.reducer;
