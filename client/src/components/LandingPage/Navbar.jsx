import React from 'react'

export const Navbar = () => {
  const navbar = [
    {
      "id" : 1,
      "text" : "Home",
      "href" : "#"
    },
    {
      "id" : 2,
      "text" : "Register",
      "href" : "#"
    },
    {
      "id" : 3,
      "text" : "Login",
      "href" : "#"
    },
  ]
  return <div className='w-full border border-[#E5E5E5] py-4'>
  <div>
    <img />
  </div>
    <div className='flex text-[#777777] gap-2 font-roboto text text-md'>
      {navbar.map(nav => (
        <a  href={nav.href} key={nav.id}>
           {nav.text}
        </a>
      ))}
    </div>
  </div>
}
