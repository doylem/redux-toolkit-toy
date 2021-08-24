import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    incrementBy(state, { payload }: PayloadAction<number>) {
      state.value += payload
    },
    decrementBy(state, { payload }: PayloadAction<number>) {
      state.value -= payload
    },
  },
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions

export default counterSlice.reducer
