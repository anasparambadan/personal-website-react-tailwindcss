import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import reactimage from '../assets/react.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'

const Experience = () => {
    const experinces = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimage,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-300'
        },
        {
            id: 6,
            src: node,
            title: 'Node.Js',
            style: 'shadow-green-400'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id: 9,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-400'
        }
    ]
    return (
        <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>


                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>The technologies that I am worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {experinces.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p>{title}</p>
                        </div>

                    ))}



                </div>

            </div>
        </div>
    )
}

export default Experience