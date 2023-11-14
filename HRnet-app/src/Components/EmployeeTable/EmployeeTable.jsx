// Importing useState hook from react
import React, { useState } from 'react'

// Importing moment to parse and format dates
import moment from 'moment';

// Importing useSelector hook from react-redux
import { useSelector } from 'react-redux'

// Importing the DataGrid component from the @mui/x-data-grid package
import { DataGrid } from '@mui/x-data-grid'

// Importing the SearchIcon component from the @mui/icons-material package
import SearchIcon from '@mui/icons-material/Search';

// EmployeeTable component
const EmployeeTable = () => {
  // Get the employee database from the redux store
  const employeeDatabase = useSelector((state) => state)

  // Define the columns of the table
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { 
      field: 'dateOfBirth', 
      headerName: 'Date Of Birth', 
      width: 100,
      type: 'date', 
      valueGetter: (params) => params.value && moment(params.value, 'YYYY/MM/DD').format('YYYY/MM/DD'),
    },

    { field: 'street', headerName: 'Street', width: 250 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zipCode', headerName: 'Zip Code', width: 80 },
    { field: 'department', headerName: 'Department', width: 150 },
    { 
      field: 'startDate', 
      headerName: 'Start Date', 
      width: 100,
      type: 'date',
      valueGetter: (params) => params.value && moment(params.value, 'YYYY/MM/DD').format('YYYY/MM/DD'), 
    },
  ]

  // Define the page size of the table
  const [pageSize, setPageSize] = useState(10)

  // Convert date strings in the employee database to Date objects for sorting
  const rowsWithDateObjects = employeeDatabase.map((employee) => ({
    ...employee,
    dateOfBirth: moment(employee.dateOfBirth).toDate(), // convert to Date object
    startDate: moment(employee.startDate).toDate(), // convert to Date object
  }));

  // Define the rows of the table
  const [rows, setRows] = useState(rowsWithDateObjects)

  // Filters the employee database based on the input value and updates the rows state.
  const filterEmployees = (e) => {
    setRows(
      employeeDatabase.filter((item) => {
        const values = Object.values(item)
        return values.some((value) =>
          value.toUpperCase().includes(e.target.value.toUpperCase())
        )
      })
    )
  }

  return (
    <div className="employeeTable">
      <div className="employeeTable__background">
        <svg fill="#3E4E02" className="employeeTable__logo" height="300px" width="300px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-45.06 -45.06 540.73 540.73" space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M322.832,301.619c-6.536,7.585-13.628,14.677-21.213,21.213l127.774,127.775l21.213-21.213L322.832,301.619z" />
              <path d="M170.743,204.827c-25.019,0-46.177,16.854-52.717,39.803h105.433C216.92,221.681,195.762,204.827,170.743,204.827z" />
              <path d="M170.743,116.658c10.974,0,19.901-8.928,19.901-19.902s-8.928-19.902-19.901-19.902s-19.901,8.928-19.901,19.902 S159.769,116.658,170.743,116.658z" />
              <path d="M170.743,0C76.595,0,0,76.595,0,170.743s76.595,170.743,170.743,170.743c94.147,0,170.742-76.595,170.742-170.743 S264.89,0,170.743,0z M170.743,46.855c27.516,0,49.901,22.386,49.901,49.902s-22.386,49.902-49.901,49.902 s-49.901-22.386-49.901-49.902S143.227,46.855,170.743,46.855z M255.546,274.63H85.94v-15c0-46.761,38.042-84.803,84.803-84.803 s84.803,38.042,84.803,84.803V274.63z" />
            </g>
          </g>
        </svg>
      </div>

      <h2 className="employeeTable__title">Current Employee</h2>

      <div className="employeeTable__searchBar">
        <input
          placeholder="Search for a name, adress, department, date..."
          className="employeeTable__searchInput"
          type="text"
          onChange={filterEmployees}
        />
        <SearchIcon className="employeeTable__searchIcon"/>
      </div>

      <DataGrid
        sx={{
          border: '0',
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 25, 50, 100]}
        hideFooterSelectedRowCount
      />
    </div>
  )
}

export default EmployeeTable
