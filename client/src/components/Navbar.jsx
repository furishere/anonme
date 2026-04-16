import React from 'react'

export const Navbar = () => {

  const navbar = [
    {
      name : "Home",
      href  : "#"
    },
    {
      name : "About Us",
      href : "#"
    },
    {
      name : "Register",
      href : "#"
    },
    {
      name : "Login",
      href : "#"
    },
  ]
  return <div className='font-roboto flex gap-5 cursor-pointer w-full text-center justify-center py-4 bg-white '>
   {navbar.map(nav => (
    <a className='text-lg hover:underline transition-all' href={nav.href}>{nav.name}</a>
   ))}
  </div>
}
