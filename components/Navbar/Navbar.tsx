import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';


import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';




type Props = {
  userName: string;
}

const Navbar: React.FC<Props> = ({userName},props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('white');

  const {data: session } = useSession();


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#1f2937');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (

    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 z-30'
    >
      <div className='max-w-[1240px] m-auto flex  justify-between items-center p-2 text-white capitalize'>
        <Link href='/'>
        <Image alt='logo' src={'/assets/images/logo2.png'} height={300} width={300} />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:underline'>
            <Link className='' href='/'>Home</Link>
          </li>
          
          
          <li className='p-4 hover:underline'>
            <Link href='/about'>AboutUs</Link>
          </li>
          <li className='p-4 hover:underline'>
            <Link href='/contact'>ContactUs</Link>
          </li>
          <li className='p-4 hover:underline'>
            <Link className= "flex justify-between" href='/login'><FaUserAlt className="mr-2 mt-1"/>{userName}</Link>
          </li>
          
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 p-2'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 capitalize'>
              <Link href='/login'>{userName}</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>AboutUs</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>C</Link>
            </li> */}
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
     

    </div>

  );
};

export default Navbar;
