import React from 'react'
import javascript3d from '../assets/javascript3d.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name='Home' className='h-fity w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl md:text-7xl font-bold text-white'>
            I am a fullstack develpoer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias voluptas perferendis eveniet quasi aliquam quibusdam neque, reprehenderit consectetur, aperiam, ab odio nesciunt obcaecati repellat sed quia. Perferendis, velit quae.
          </p>
          <div>
            <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer' >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={23} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={javascript3d} alt="profileimgg"  className='rounded-2xl mx-auto w-2/3 md:w-2/3'/>
        </div>
      </div>
    </div>
  )
}

export default Home