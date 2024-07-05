import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    singleCard: (state , action)=>{
      state.value =action.payload
    }
    
  }
})
export const {singleCard} = CounterSlice.actions

export default CounterSlice.reducer