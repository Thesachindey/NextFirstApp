'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const pathName= usePathname();
  console.log('pathName', pathName);
  if(pathName.startsWith('/dashboard')) return <></>;

    return (
    
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink href={'/tutorials'}>Tutorials</NavLink></li>
        <li><NavLink href={'/foods'}>Food</NavLink></li>
        <li><NavLink href={'/reviews'}>Reviews</NavLink></li>
        <li>
          <a>About</a>
          <ul className="p-2">
           <li><NavLink href={'/about'}>About Us</NavLink></li>
           <li><NavLink href={'/about/contact'}>Contact</NavLink></li>
           <li><NavLink href={'/about/teams'}>Teams</NavLink></li>
          </ul>
        </li>
        <li><NavLink href={'/stories'}>Stories</NavLink></li>
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl">FirstNext</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><NavLink href={'/tutorials'}>Tutorials</NavLink></li>
     <li><NavLink href={'/foods'}>Food</NavLink></li>
     <li><NavLink href={'/reviews'}>Reviews</NavLink></li>
      
      <li>
        <details>
          <summary>About</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
           <li><NavLink href={'/about'}>About Us</NavLink></li>
           <li><NavLink href={'/about/contact'}>Contact</NavLink></li>
           <li><NavLink href={'/about/teams'}>Teams</NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink href={'/stories'}>Stories</NavLink></li>
      <li><NavLink href={'/login'}>Login</NavLink></li>
      <li><NavLink href={'/register'}>Register</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;