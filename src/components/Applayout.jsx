import React from 'react'
import { Outlet } from 'react-router-dom'

// const randomColor = function () {
//   return Math.trunc(Math.random() * 255 + 1)
// }

// console.log(randomColor(), randomColor(), randomColor())

// setInterval(() => {
//     const bodyCOLOR = `rgba(${randomColor()},${randomColor()},${randomColor()},0.76)`
//     document.body.style.backgroundColor = bodyCOLOR;
// }, 10000)


function Applayout() {
  // setInterval(() => {
  //     const rgbColor = ``
  // }, 2000)
  return (
    <>
    <Outlet />
    
    </>
  )
}

export default Applayout