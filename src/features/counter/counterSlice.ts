import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
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

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const countDown = createAsyncThunk<void, void, { state: RootState }>(
  'counter/countDown',
  async (_, { dispatch, getState }) => {
    while (getState().counter.value > 0) {
      dispatch(decrement())
      await timeout(1000)
    }
  }
)

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions

export default counterSlice.reducer
