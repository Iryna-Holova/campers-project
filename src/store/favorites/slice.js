import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { items: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    addFavorite(state, { payload }) {
      return {
        ...state,
        items: [...state.items, { ...payload, isFavorite: true }],
      };
    },
    removeFavorite(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== payload),
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
