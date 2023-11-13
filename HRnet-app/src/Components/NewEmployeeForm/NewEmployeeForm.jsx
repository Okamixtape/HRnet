// Importing useState hook from react
import React, { useState } from 'react'

// Importing useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom'

// Importing useDispatch hook from react-redux to dispatch actions
// And employeesAddition action from the employeesSlice
import { useDispatch } from 'react-redux'
import { employeesAddition } from '../../features/employees/employeesSlice'

// Importing several MUI components for the form
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded'

// Importing AdaptaterMoment from @date-io/moment
import AdaptaterMoment from '@date-io/moment'

// Importing DatePicker and LocalizationProvider 
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

// Importing Modal from modal-component-test (npm package)
import Modal from 'modal-component-test/dist/components/Modal'

// Importing the USA states and departments from the services folder
import { states } from '../../services/usaStates'
import { departments } from '../../services/hrnetDepartments'

// Importing the valid and error icons
import formValid from './valid.png'
import formError from './error.png'

// This is the new employee form component
const NewEmployeeForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // The user state is defined with the following properties
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })

  // The errors state is defined with the following properties
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    startDate: false,
    street: false,
    city: false,
    zipCode: false,
    department: false,
  });

  const [birthDate, setBirthdate] = useState(null)
  const [startDate, setStartdate] = useState(null)
  const [userDepartment, setuserDepartment] = useState('')
  const [userLocationState, setuserLocationState] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [formIsValid, setFormIsValid] = useState(null)

  const datePickerHandle = (name, value) => {
    let isValid = true;
    if (name === 'dateOfBirth') {
      isValid = dateRegex.test(value.format('MM/DD/YYYY')) && !isFutureDate(value) && getAge(value) >= 16;
    } else if (name === 'startDate') {
      isValid = dateRegex.test(value.format('MM/DD/YYYY')) && !isOneMonthInFuture(value);
    }
  
    setUser(prevState => ({
      ...prevState,
      [name]: value.format('MM/DD/YYYY'),
    }));
  
    setErrors(prevState => ({
      ...prevState,
      [name]: !isValid,
    }));
  }

  const inputHandle = (e) => {
    const { name, value } = e.target;
  
    let isValid = true;
    switch (name) {
      case 'firstName':
      case 'lastName':
        isValid = nameRegex.test(value);
        break;
      case 'street':
      case 'city':
        isValid = addressRegex.test(value);
        break;
      case 'zipCode':
        isValid = zipCodeRegex.test(value);
        break;
      default:
        break;
    }
  
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  
    setErrors(prevState => ({
      ...prevState,
      [name]: !isValid,
    }));
  }

  const formValidModal = {
    title: 'valid',
    icon: formValid,
    altText: 'valid image',
    content: 'Your request has been successfully processed.',
    cta: 'Employee added !',
  }

  const formErrorModal = {
    title: 'error',
    icon: formError,
    altText: 'error image',
    content: 'Please complete correctly all fields on the form.',
    cta: 'Try again !',
  }

  // Regex patterns
  const nameRegex = /^[a-zA-Zéèêëîïôöûüçàáâäæãåā-]{3,}([-][a-zA-Zéèêëîïôöûüçàáâäæãåā-]{3,})*$/;
  const dateRegex = /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
  const addressRegex = /^[a-zA-Z0-9éèêëîïôöûüçàáâäæãåā\s,'.-]{3,}$/;
  const zipCodeRegex = /^\d+$/;
  
  // Date validation
  const currentYear = new Date().getFullYear();

  // Check if the date is in the future
  const isFutureDate = (dateString) => {
    const date = new Date(dateString);
    return date > new Date();
  };

  // Check if the date is one month in the future
  const isOneMonthInFuture = (dateString) => {
    const date = new Date(dateString);
    const oneMonthInFuture = new Date();
    oneMonthInFuture.setMonth(oneMonthInFuture.getMonth() + 1);
    return date > oneMonthInFuture;
  };

  // Get age from date of birth
  const getAge = (dateString) => {
    const birthDate = new Date(dateString);
    const age = currentYear - birthDate.getFullYear();
    const m = new Date().getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && new Date().getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  // Form validation
  const handleSubmit = (e) => {

  const isDOBValid = !isFutureDate(user.dateOfBirth) && getAge(user.dateOfBirth) >= 18;
  const isStartDateValid = !isOneMonthInFuture(user.startDate) && new Date(user.startDate) > new Date(user.dateOfBirth);

  const isValidName = nameRegex.test(user.firstName) && nameRegex.test(user.lastName);
  const isValidDateOfBirth = dateRegex.test(user.dateOfBirth);
  const isValidStartDate = dateRegex.test(user.startDate);
  const isValidStreet = addressRegex.test(user.street);
  const isValidCity = addressRegex.test(user.city);
  const isValidZipCode = zipCodeRegex.test(user.zipCode);

  const isFormValid = isValidName && 
                      isDOBValid && 
                      isStartDateValid && 
                      isValidDateOfBirth &&
                      isValidStartDate &&
                      isValidStreet && 
                      isValidCity && 
                      user.state !== '' && 
                      isValidZipCode && 
                      user.department !== '';
    
    // If the form is valid, the user is added to the application's state
    if (isFormValid) {
      setFormIsValid(true)
      // valid modal appear
      setIsShown(!isShown)
      // create an ID for the user (needed to use the MUI data-table)
      user.id = `${user.firstName}${user.lastName}${user.department}`
      // add the user from the form to the application's state
      dispatch(employeesAddition(user))
      return;
    }
    setFormIsValid(false)
    // error modal appear
    setIsShown(!isShown)
  }

  return (
    <div className="newEmployeeForm">
      <h2 className="newEmployeeForm__title">Create Employee</h2>

      <TextField
        id="firstName outlined-basic"
        required={true}
        label="First Name"
        variant="outlined"
        name={'firstName'}
        error={errors.firstName} 
        helperText={errors.firstName ? "Invalid first name" : ""}
        onChange={e => inputHandle(e)}
      />

      <TextField
        id="lastName outlined-basic"
        required={true}
        label="Last Name"
        aria-label="last-name"
        variant="outlined"
        name={'lastName'}
        error={errors.lastName} 
        helperText={errors.lastName ? "Invalid last name" : ""}
        onChange={e => inputHandle(e)}
      />

      <LocalizationProvider dateAdapter={AdaptaterMoment}>
        <DatePicker
          id="dateOfBirth"
          required={true}
          label="Date of Birth"
          value={birthDate}
          onChange={(newValue) => {
            setBirthdate(newValue)
            datePickerHandle('dateOfBirth', newValue)
          }}
          renderInput={(params) =>
            <TextField
            {...params}
            error={errors.dateOfBirth}
            helperText={errors.dateOfBirth ? "Invalid date of birth" : ""}
            />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdaptaterMoment}>
        <DatePicker
          id="startDate"
          required={true}
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setStartdate(newValue)
            datePickerHandle('startDate', newValue)
          }}
          renderInput={(params) => 
            <TextField
            {...params}
            error={errors.startDate}
            helperText={errors.startDate ? "Invalid start date" : ""}
            />}
        />
      </LocalizationProvider>

      <TextField
        aria-label="street"
        id="street outlined-basic"
        required={true}
        label="Street"
        variant="outlined"
        name={'street'}
        error={errors.street}
        helperText={errors.street ? "Invalid street address" : ""}
        onChange={e => inputHandle(e)}
      />

      <TextField
        aria-label="city"
        id="city outlined-basic"
        required={true}
        label="City"
        variant="outlined"
        name={'city'}
        error={errors.city}
        helperText={errors.city ? "Invalid city" : ""}
        onChange={e => inputHandle(e)}
      />

      <div className="newEmployeeForm__location">
        <Box className={'newEmployeeForm__locationState'}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="location demo-simple-select"
              value={userLocationState}
              label="State"
              name="state"
              aria-label="state"
              onChange={(event) => {
                setuserLocationState(event.target.value)
                inputHandle(event)
              }}
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TextField
          className={'newEmployeeForm__locationZip'}
          type="number"
          id="locationZip outlined-basic"
          required={true}
          aria-label="zip code"
          label="Zip Code"
          variant="outlined"
          name={'zipCode'}
          error={errors.zipCode}
          helperText={errors.zipCode ? "Invalid Zip Code" : ""}
          onChange={e => inputHandle(e)}
        />
      </div>

      <Box sx={{ minWidth: 120 }}>
        <FormControl required fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="department demo-simple-select"
            required={true}
            aria-label="department"
            value={userDepartment}
            label="Department"
            name={'department'}
            onChange={(event) => {
              setuserDepartment(event.target.value)
              inputHandle(event)
            }}
          >
            {departments.map((department, index) => (
              <MenuItem key={index} value={department.name}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className="newEmployeeForm__saveButton">
        <Button
          onClick={handleSubmit}
          fullWidth={false}
          variant="outlined"
          endIcon={<SaveRoundedIcon />}
        >
          Save
        </Button>
      </div>

      {isShown ? (
        <Modal
          buttonCallback={() => {
            setIsShown(!isShown)
            if (formIsValid) {
              navigate('/employee')
            }
          }}
          modal={formIsValid ? formValidModal : formErrorModal}
          closeIcon={true}
          button={true}
          allowCustomization={true}
        />
      ) : null}
    </div>
  )
}

export default NewEmployeeForm
