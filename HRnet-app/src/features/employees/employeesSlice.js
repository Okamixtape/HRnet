// Importing the createSlice function from the @reduxjs/toolkit package
import { createSlice } from '@reduxjs/toolkit'

// And the mockup data from the employeeDatabase file
import { employeeDatabase } from '../../services/employeeDatabase'

// By default, mockup data (employeeDatabase) contains a small list of employees
const initialState = employeeDatabase

// employeesSlice is a reducer function that takes the initial state and an object
const employeesSlice = createSlice({
  name: 'employeesReducer',

  initialState,

  reducers: {
    employeesAddition(state, action) {
      state = state.push(action.payload)
    },
  },
})

export const { employeesAddition } = employeesSlice.actions
export default employeesSlice.reducer
