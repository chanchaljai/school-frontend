import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>ABC School</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar