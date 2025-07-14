import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  upvotes: {}, // { songId: upvoteCount }
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    addSongToQueue(state, action) {
      state.queue.push({ ...action.payload, upvotes: 0 });
    },
    removeSongFromQueue(state, action) {
      state.queue = state.queue.filter(song => song.id !== action.payload);
    },
    upvoteSong(state, action) {
      const song = state.queue.find(song => song.id === action.payload);
      if (song) song.upvotes += 1;
    },
    chooseNextSong(state, action) {
      state.queue = state.queue.filter(song => song.id !== action.payload);
    },
  },
});

export const { addSongToQueue, removeSongFromQueue, upvoteSong, chooseNextSong } = queueSlice.actions;
export default queueSlice.reducer;
