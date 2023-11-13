// Importing React
import React from 'react'

// Importing Header and EmployeeTable components
import Header from '../../Components/Header/Header'
import EmployeeTable from '../../Components/EmployeeTable/EmployeeTable'

// This is the Employee page
const Employee = () => {
  document.title = 'HRnet - Employees'
  return (
    <>
      <Header page={'employeeTable'} />
      <EmployeeTable />
    </>
  )
}

export default Employee
