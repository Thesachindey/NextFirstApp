import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
        <li><Link href={'/tutorials'}>Tutorials</Link></li>
        <li>
          <a>About</a>
          <ul className="p-2">
           <li><Link href={'/about'}>About Us</Link></li>
           <li><Link href={'/about/contact'}>Contact</Link></li>
           <li><Link href={'/about/teams'}>Teams</Link></li>
          </ul>
        </li>
        <li><Link href={'/stories'}>Stories</Link></li>
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl">FirstNext</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link href={'/tutorials'}>Tutorials</Link></li>
      
      <li>
        <details>
          <summary>About</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
           <li><Link href={'/about'}>About Us</Link></li>
           <li><Link href={'/about/contact'}>Contact</Link></li>
           <li><Link href={'/about/teams'}>Teams</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={'/stories'}>Stories</Link></li>
      <li><Link href={'/login'}>Login</Link></li>
      <li><Link href={'/register'}>Register</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;