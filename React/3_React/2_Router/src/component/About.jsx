import React from 'react'
import { Link, Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <Link to="bca">BCA</Link>
      <Link to="mca">MCA</Link>
      <Outlet/>
    </div>
  )
}

export default About
