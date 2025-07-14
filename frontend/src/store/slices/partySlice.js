import { createSlice } from '@reduxjs/toolkit';

const partySlice = createSlice({
  name: 'parties',
  initialState: {
    activePartyId: null,
    userParties: [], // Parties created by the user (for DJs)
    joinedParty: null, // The party user is currently in
  },
  reducers: {
    createParty: (state, action) => {
      state.userParties.push(action.payload);
    },
    joinParty: (state, action) => {
      state.joinedParty = action.payload;
      state.activePartyId = action.payload.id;
    },
    leaveParty: (state) => {
      state.joinedParty = null;
      state.activePartyId = null;
    },
    deleteParty: (state, action) => {
      state.userParties = state.userParties.filter(party => party.id !== action.payload);
    },
  },
});

export const { createParty, joinParty, leaveParty, deleteParty } = partySlice.actions;
export default partySlice.reducer;