import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  error: null,
  loading: false, // It's better to initialize loading as false rather than null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = null
    },
    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

// Actions
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions

// Selectors
export const selectCurrentUser = (state) => state.user.currentUser
export const selectUserLoading = (state) => state.user.loading
export const selectUserError = (state) => state.user.error

// Reducer
export default userSlice.reducer
