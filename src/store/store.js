import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { campersReducer } from './campers/slice';
import { filterReducer } from './filter/slice';
import { favoritesReducer } from './favorites/slice';

const filterPersistConfig = {
  key: 'filter',
  storage: storage,
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage: storage,
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: persistReducer(filterPersistConfig, filterReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
