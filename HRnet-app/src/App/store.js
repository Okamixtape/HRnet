// Importing the configureStore function from the @reduxjs/toolkit package
import { configureStore } from '@reduxjs/toolkit'

// Importing the reducer from the employeesSlice file
import employeesSlice from '../features/employees/employeesSlice'

// Creating a store using the configureStore function
export const store = configureStore({
  reducer: employeesSlice,
})
