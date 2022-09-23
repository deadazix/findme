import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
type BlockState =
  | "start"
  | "home"
  | "edge"
  | "obstacle"
  | "non-active"
  | "active"
  | "activated-1"
  | "activated-2"
  | "activated-3"
  | "activated-4"
  | "activated-5";
interface InitialState {
    
  [index: number]: {
    blockState: BlockState;
  };
}
const initialState: InitialState = {};
const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlockById(state, action: PayloadAction<number>) {
      state[action.payload] = { blockState: "non-active" };
    },
    changeBlockStateById(
      state,
      action: PayloadAction<{ id: number; newState: BlockState }>
    ) {
      state[action.payload.id].blockState = action.payload.newState;
    },
  },
});
export const blocksReducer = blocksSlice.reducer;
export const blocksActions = blocksSlice.actions;
