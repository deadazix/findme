import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ToolType } from "../..//models/types";

interface InitialState {
  ToolsState: ToolType;
  
  dimention: {
    rowsCount:number
    columnsCount:number
  }
}
const initialState: InitialState = {
  ToolsState: "start",
  dimention: {
    rowsCount:10
    ,columnsCount:10
  }

  
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeToolsState(state, action: PayloadAction<ToolType>) {
      state.ToolsState = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
