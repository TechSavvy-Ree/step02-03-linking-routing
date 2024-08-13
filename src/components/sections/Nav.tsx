import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (       
  <nav className="flex bg-slate-600 text-white  py-3 px-3 justify-around border-black" >
    <Link href="\">Home</Link>
    <Link href="\Blog">Blog</Link>
    <Link href="\Dashboard"> Dashboard</Link>
    <Link href="\Dashboard\Analytics" >Analytics</Link>
    {/* <Link href="\Dashboard\Settings">Settings</Link> */}
    <Link href="\Dashboard\Profile">Profile</Link>
    <Link href="\Dashboard\Password\">Password</Link>
    <Link href="\Dashboard\Profile\Name">Name</Link>

    
  </nav>



  )
}

export default Nav 