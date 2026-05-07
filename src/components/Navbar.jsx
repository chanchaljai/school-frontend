import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>ABC School</h1>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar