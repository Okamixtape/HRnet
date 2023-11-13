// Importing React
import React from 'react'
// And Link from react-router-dom
import { Link } from 'react-router-dom'

// This is the Error404 page
const Error404 = () => {
  document.title = 'HRnet - Error 404'
  return (
    <div className="errorPage">
      <svg fill="#3E4E02" className="main__logo" height="300px" width="300px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-45.06 -45.06 540.73 540.73" space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">
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
      <h2 className="errorPage__title">ERROR 404</h2>
      <Link className="errorPage__link" to={'/employee'}>
        Back to employees
      </Link>
    </div>
  )
}

export default Error404
