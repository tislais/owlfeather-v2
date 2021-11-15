import React, { useState } from 'react';
import NavItem from './NavItem';


const Nav = ({ navOpen }) => {
  const links = ['Home', 'Products', 'Docs', 'Company', 'Contact']
  const navItems = links.map(item => 
    <NavItem item={item} />
  )
  
  return (
    <nav>
      <ul className={navOpen ? ul : ul + 'hidden'}>
        {navItems}
      </ul>
    </nav>
  )
}

const ul = `
  bg-gray-800
`

export default Nav;
