import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='w-full h-fit bg-gradient-to-b from-black to-gray-800  text-white pt-20'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Contact me by submitting the form</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/316d51a4-0f52-4792-9b92-9b784d978abf" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter Your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name='email' placeholder='Enter Your Emai'
                            className='my-4  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="message" rows="10" placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-blue-500 to-blue-600 hover:scale-105 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact