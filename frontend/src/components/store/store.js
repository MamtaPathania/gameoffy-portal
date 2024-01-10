
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Slice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;