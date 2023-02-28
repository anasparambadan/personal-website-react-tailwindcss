import React from 'react'

const About = () => {
  return (
    <div name = 'About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias voluptatibus ipsa eum dolore placeat qui, magni modi illo laborum quo maiores quibusdam est voluptatem, ducimus excepturi? Tempore, perspiciatis possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius hic voluptates soluta cum, repellat consectetur assumenda recusandae, facere nobis explicabo totam debitis asperiores non id eos, consequatur nostrum minima.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est adipisci voluptatibus doloremque sint! Quo exercitationem omnis quae reprehenderit? Soluta corrupti vel veritatis obcaecati autem aut reprehenderit. Tempora qui est sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore ipsum consectetur id eaque magnam quod, corporis eveniet qui reiciendis tenetur laboriosam quas nostrum placeat fuga ullam totam facilis doloribus!
            </p>
        </div>
    </div>
  )
}

export default About