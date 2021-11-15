import React from 'react'

const NavItem = ({ item }) => {
  return (
    <li className={li}>{item}</li>
  )
}

const li = `
  p-4
  text-gray-300
  text-sm
  tracking-wider
  hover:text-green-300
  hover:bg-gray-900
  sm:w-full
  sm:text-center
  lg:w-60
  lg:py-2
  lg:px-6
  lg:text-lg
  lg:text-left
  lg:hover:bg-white
  lg:hover:bg-opacity-5
  lg:rounded-full
`

export default NavItem
