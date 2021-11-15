import React from 'react';
import NavItem from './NavItem';

const links = ['Home', 'Products', 'Docs', 'Company', 'Contact']
const navItems = links.map(item => 
  <NavItem item={item} />
)

const Nav = () => {
  return (
    <nav>
      <ul className={ul}>
        {navItems}
      </ul>
    </nav>
  )
}

const ul = `
  bg-gray-800
`

const li = ``

export default Nav;
