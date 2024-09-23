import React, { useState } from 'react';
import { FaSearch, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '/logo.png';

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(true);

    return (
        <header className='text-white flex justify-between items-center py-2 relative'>
            {/* Logo Section */}
            <div className='flex items-center'>
                <img src={logo} alt="Logo" width={96} className='h-24 w-24' />
            </div>

            {/* Navigation Links */}
            <nav className='flex space-x-6'>
                <ul className='flex space-x-6 text-sm font-medium'>
                    <li className='border-b-2'>HOME</li>
                    <li 
                        className='relative hover:border-b-2 transition duration-400'
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                    >
                        PAGES
                        {dropdownVisible && (
                            <div className='absolute left-1/2 transform -translate-x-1/2 mt-10 w-40 bg-gray-100 text-gray-900 shadow-lg'>
                                <ul className='flex flex-col py-4'>
                                    <li className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>Option 1</li>
                                    <li className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>Option 2</li>
                                    <li className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>Option 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className='hover:border-b-2 transition duration-400'>EVENTS</li>
                    <li className='hover:border-b-2 transition duration-400'>TOURNAMENTS</li>
                    <li className='hover:border-b-2 transition duration-400'>BLOG</li>
                    <li className='hover:border-b-2 transition duration-400'>SHOP</li>
                </ul>
            </nav>

            {/* Icons Section */}
            <div className='flex space-x-4 text-lg'>
                <FaSearch className='cursor-pointer' />
                <FaFacebookF className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaWhatsapp className='cursor-pointer' />
            </div>
        </header>
    );
}

export default Header;
