import React from 'react'
import navbar from '../assets/portfolio/navbar.png'
import navbar2 from '../assets/portfolio/navbar2.png'
import navbar3 from '../assets/portfolio/navbar3.png'
import navbar4 from '../assets/portfolio/navbar4.png'
import navbar5 from '../assets/portfolio/navbar5.png'
import navbar6 from '../assets/portfolio/navbar6.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: navbar,
            link:"https://github.com/anasparambadan/dotsapp_socialMedia_frontEnd.git",
            demo:"https://dotmedia.netlify.app/",
            name:"Dots - social media app"
        },
        {
            id: 2,
            src: navbar2,
            link:"https://github.com/anasparambadan/fauxmen.git",
            demo:"https://www.fauxmen.store/",
            name:"Fauxmen - Ecommerce website"
        },
        {
            id: 3,
            src: navbar3,
            link:"https://github.com/anasparambadan/yt-clone.git",
            demo:"https://anasparambadan.github.io/yt-clone/",
            name:"youTube-clone"
            
        },
        {
            id: 4,
            src: navbar4,
            link:"https://github.com/anasparambadan/netflix-cln-react-tmdb.git",
            demo:"https://netflix-tmdb-cln.netlify.app/",
            name:"Netflix-clone"
        },
        {
            id: 5,
            src: navbar5,
            link:"https://github.com/anasparambadan/olx-cln-react.git",
            demo:"https://luxury-paletas-c320a2.netlify.app/",
            name:"Olx-clone"
        },
        {
            id: 6,
            src: navbar6,
            link:"https://github.com/anasparambadan/todo-list-react-2.git",
            demo:"https://scheduletodo.netlify.app/",
            name:"Todo-list"
        },
    ]


    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:p-0'>

                    {portfolios.map(({ id, src, link, demo,name }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <span className="block text-center pt-2 text-gray-300 font-semibold">{name}</span>
                                <div className='flex items-center justify-center'>
                                    <a target={'_blank'} href={demo} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'   rel="noreferrer">Demo</a>
                                    <a target={'_blank'} href={link} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'  rel="noreferrer">Code</a>
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