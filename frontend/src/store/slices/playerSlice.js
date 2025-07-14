import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
  volume: 1.0,
  position: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong(state, action) {
      state.currentSong = action.payload;
      state.isPlaying = true;
      state.position = 0;
    },
    pauseSong(state) {
      state.isPlaying = false;
    },
    setVolume(state, action) {
      state.volume = action.payload;
    },
    updatePosition(state, action) {
      state.position = action.payload;
    },
  },
});

export const { playSong, pauseSong, setVolume, updatePosition } = playerSlice.actions;
export default playerSlice.reducer;
