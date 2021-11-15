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
`

export default NavItem
