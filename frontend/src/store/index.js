import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import partyReducer from "./slices/partySlice";
import queueReducer from "./slices/queueSlice";
import playerReducer from "./slices/playerSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    party: partyReducer,
    queue: queueReducer,
    player: playerReducer,
  },
});

export default store;