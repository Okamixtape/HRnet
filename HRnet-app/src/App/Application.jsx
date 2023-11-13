// Application routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importation of the pages
import Home from '../Pages/Home/Home'
import Employee from '../Pages/Employee/Employee'
import Error404 from '../Pages/Error404/Error404'

// This is the main application file rendered by the index.js file
function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Application
