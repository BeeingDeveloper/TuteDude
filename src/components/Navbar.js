import React from 'react'
import LOGO from '../assets/images/image 1.svg';
import AVATAR from '../assets/images/Vector.svg'
import {RiArrowDropDownLine}  from 'react-icons/ri'
import '../utils/style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {




  return (
    <div className='w-screen h-[73.03px]'>
        <div className='w-[95%] lg:w-[85%]  m-auto flex justify-between text-color font-semibold'>
            <Link to='/'>
              <img src={LOGO} alt='logo' className='transition duration-150 hover:scale-90' />
            </Link>
            
            <ul className='flex gap-5 my-auto'>
                <li className='hidden lg:block transition duration-150 hover:scale-90'>
                  <Link to='/assignment'>
                    My Assignment
                  </Link>
                </li>

                <li className='hidden lg:block transition duration-150 hover:scale-90'>
                  <Link to='/chat'>
                    Chat with Mentor
                  </Link>
                </li>

                <li className='flex gap-1 transition duration-150 hover:scale-90'>
                    <img src={AVATAR} alt='avatar' className='hidden lg:block' />
                    <h4 className='hidden lg:flex'>Profile Name
                    <RiArrowDropDownLine className='relative text-2xl' />
                    </h4>
                    <h4 className='p-2 bg-btn text-white rounded-md lg:hidden mr-4'>Profile Name</h4>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar