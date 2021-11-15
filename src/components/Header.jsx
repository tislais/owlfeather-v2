import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className={header}>
      <MenuIcon className={menu} />
      <h1 className={h1}>Project Owlfeather</h1>
    </header>
  )
}

const header = `
  p-4 

  bg-gradient-to-r 
  from-green-500 
  to-blue-500 

  text-white

  border-b-8 
  border-black 
  border-opacity-30

  flex
  gap-4
`

const h1 = `
  font-semibold
  uppercase
  tracking-wider
`

const menu = `
  h-6
  hover:text-green-700
`

export default Header;
