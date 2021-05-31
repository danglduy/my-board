import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  readonly title: string;
}

export const initialState = {
  title: 'My Todo',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<{ title: string }>) {
      state.title = action.payload.title;
    },
  },
});

export const { setTitle } = appSlice.actions;
export default appSlice.reducer;
