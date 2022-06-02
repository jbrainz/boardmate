// TODO: installiing dependencies

// BUG: fix some bugs


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
