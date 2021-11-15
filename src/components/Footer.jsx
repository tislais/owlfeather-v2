import React from 'react';

const Footer = () => {
  return (
    <footer className={footer}>
        <a href="https://github.com/tislais" className={a}>Aspernatur ea animi nemo et dolorum.</a>
    </footer>
  )
}

const footer = `
  mt-auto
  py-4
  bg-black
  bg-opacity-20
  text-black
  text-opacity-75
  text-center
`

const a = `
  tracking-wider
  font-semibold
  text-sm
  italic
`

export default Footer;
