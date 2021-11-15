import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

const Header = ({ handleMenuClick }) => {
  return (
    <header className={header}>
      <div class={div}>
        <MenuIcon className={menu} onClick={handleMenuClick} />
        <h1 className={h1}>Project Owlfeather</h1>
      </div>
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

`

const div = `
  max-w-screen-xl
  flex
  gap-4
  mx-auto
`

const h1 = `
  font-semibold
  uppercase
  tracking-wider
`

const menu = `
  h-6
  hover:text-green-700
  sm:hidden
`

export default Header;
