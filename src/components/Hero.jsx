import React from 'react'

const Hero = () => {
    return ( 
        <div className='max-w-[1640px] mx-auto p-4 bg-blue-100'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-blue-500'>Foods</span> Devlivered</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1623962470629-ead26532ef44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
        </div>
      )
}

export default Hero