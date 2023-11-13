// Importing the React and ReactDOM packages
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importing the SCSS main file
import "./styles/main.scss";

// Importing the App component, store and Provider to use the state globally in the application
import App from './App/Application'
import { store } from './App/store'
import { Provider } from 'react-redux'

// This is the entry point of the application, where the App component is rendered 
// and nested inside the Provider component in order to use the state globally
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)