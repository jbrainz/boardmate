import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
<<<<<<< HEAD
>>>>>>> de8b53c ((PROJECT:SETUP) init)
=======
>>>>>>> 22efb90 (custom themes setup)
