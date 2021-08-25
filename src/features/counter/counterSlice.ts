import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
interface CounterState {
  value: number
  isCountingDown: boolean
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const countDown = createAsyncThunk<void, { speed: number }, { state: RootState }>(
  'counter/countDown',
  async ({ speed }, { dispatch, getState }) => {
    while (getState().counter.value > 0) {
      dispatch(decrement())
      await timeout(speed)
    }
  }
)

const initialState: CounterState = {
  value: 0,
  isCountingDown: false,
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
  extraReducers: (builder) => {
    builder.addCase(countDown.pending, (state) => {
      state.isCountingDown = true
    })
    builder.addCase(countDown.fulfilled, (state) => {
      state.isCountingDown = false
    })
  },
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions

export default counterSlice.reducer
