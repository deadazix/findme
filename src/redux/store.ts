import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/uiSLice";
import { blocksReducer } from "./slices/blocksSlice";
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    blocks: blocksReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
