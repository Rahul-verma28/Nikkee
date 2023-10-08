import React, { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <header className='flex justify-between w-full top-0 px-12 py-8 bg-white shadow  shadow-gray-500/50 z-1'>
                <nav>
                    <a href="/" className='text-2xl font-bold text-orange-500'>Nike</a>
                </nav>
                <ul className='hidden lg:flex text-black font-bold gap-20 align-middle '>
                    <li><a className='hover:text-gray-400' href="/">Home</a></li>
                    <li><a className='hover:text-gray-400' href="/">Products</a></li>
                    <li><a className='hover:text-gray-400 ' href="/">About us</a></li>
                    <li><a className='hover:text-gray-400 ' href="/">Contact us</a></li>
                </ul>
                <div className='text-black font-bold'>
                    <a className='hover:text-gray-400' href="/">Login/Sign up</a>
                </div>
                {
                toggle?
                <i className="fa-solid fa-xmark block lg:hidden text-2xl" onClick={() => setToggle(!toggle)}></i> :
                 <i onClick={() => setToggle(!toggle)} className="bi bi-list text-black font-bold text-lg lg:hidden"></i>
                }
                <ul className={` fixed py-40 w-full h-screen bg-black text-white font-bold text-center leading-10 mt-16 
                ${toggle ? 'left-[0]': 'left-[100%]'}`}>
                    <li><a className='hover:text-gray-400' href="/">Home</a></li>
                    <li><a className='hover:text-gray-400' href="/">Products</a></li>
                    <li><a className='hover:text-gray-400 ' href="/">About us</a></li>
                    <li><a className='hover:text-gray-400 ' href="/">Contact us</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header
