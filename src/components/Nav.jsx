import React from 'react';

const links = ['Home', 'Products', 'Docs', 'Company', 'Contact']
const navItems = links.map(item => 
  <li>{item}</li>
)

const Nav = () => {
  return (
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  )
}

export default Nav;
