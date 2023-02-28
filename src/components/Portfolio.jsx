import React from 'react'
import navbar from '../assets/portfolio/navbar.jpg'
import navbar2 from '../assets/portfolio/navbar2.jpg'
import navbar3 from '../assets/portfolio/navbar3.jpg'
import navbar4 from '../assets/portfolio/navbar4.jpg'
import navbar5 from '../assets/portfolio/navbar5.jpg'
import navbar6 from '../assets/portfolio/navbar6.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: navbar
        },
        {
            id: 2,
            src: navbar2
        },
        {
            id: 3,
            src: navbar3
        },
        {
            id: 4,
            src: navbar4
        },
        {
            id: 5,
            src: navbar5
        },
        {
            id: 6,
            src: navbar6
        },
    ]


    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:p-0'>

                    {portfolios.map(({ id, src }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>

                        )

                    })}

                </div>

            </div>
        </div >
    )
}

export default Portfolio