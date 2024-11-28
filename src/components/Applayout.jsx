import React from 'react'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return (
    <>
    <Outlet />
    <footer>
        <p>
          &copy; Copyright &lt;&lt; Made by <span>Aminul Ali, Barasha Rajbongshi and Rahima choudhary </span> &gt;&gt;
        </p>
    </footer>
    </>
  )
}

export default Applayout