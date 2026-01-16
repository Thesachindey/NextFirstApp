'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName=usePathname();

    return (
        <Link className={`px-4 py-2 rounded ${
  pathName.startsWith(href) ? "text-blue-500 " : "text-gray-700 hover:bg-gray-200"
}`}
 href={href}>
            {children}
        </Link>
    );
};

export default NavLink;