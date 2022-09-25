import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ToolType } from "../..//models/types";
export type DistanceType = undefined |number | 'unreachable'
interface InitialState {
  ToolsState: ToolType;
  isStartAllowed:boolean
  distance:DistanceType,
  dimention: {
    rowsCount:number
    columnsCount:number
  }
}
const initialState: InitialState = {
  ToolsState: "start",
  distance:undefined,
  isStartAllowed:false,
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
    setIsStartAllowed(state,action:PayloadAction<boolean>){
      state.isStartAllowed = action.payload
    },
    setDistance(state,action:PayloadAction<DistanceType>){
      state.distance = action.payload
    }
  },
  
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
