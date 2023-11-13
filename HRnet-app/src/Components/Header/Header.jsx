// Importing React
import React from 'react'

// Importing Link from react-router-dom
import { Link } from 'react-router-dom'

// Importing PropTypes
import PropTypes from 'prop-types'

// This is the header component composed of a title and a navigation bar
const Header = ({ page }) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>HR</h1>
        <span>net</span>
      </div>

      <nav className="header__nav">
        {page === 'employeeTable' ? (
          <Link className="header__navButton -active" to={'/'}>
            Create Employee
          </Link>
        ) : (
          <Link className="header__navButton -active" to={'/employee'}>
            View Current Employees
          </Link>
        )}
      </nav>
    </header>
  )
}

// PropTypes definition for the Header component
Header.propTypes = {
  page: PropTypes.string.isRequired,
}

export default Header
