import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "first user"
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  }
})

export const { setUserDetails } = userSlice.actions
export default userSlice.reducer
<<<<<<< HEAD
=======
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "first user"
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  }
})

export const { setUserDetails } = userSlice.actions
export default userSlice.reducer
>>>>>>> de8b53c ((PROJECT:SETUP) init)
=======
>>>>>>> 22efb90 (custom themes setup)
