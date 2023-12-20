import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div id="contact" className="my-16    md:text-lg container bg-gradient-to-r from-teal-100 to-indigo-200 mx-auto rounded-lg"  >
            <div className="-xl container mt- px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-12 mx-auto text-gray-900 rounded-lg justify-between ">
                    <div className="flex flex-col justify-around">
                      <div>
                        <h2 className="text-2xl lg:text-4xl font-bold leading-tight ">Your college experience is what you make of it. </h2>
                        
                        <h2 className="text-xl mt-4 text-indigo-900 lg:text-2xl font-semibold leading-tight ">The best way to pay it forward is by sharing your experience with those who come after you."</h2>

                        <button  className='bg-pink-500 py-2 px-6 my-4 rounded-md text-white font-bold'>
                          <Link href='/college1/academics'>
                            Review Now
                          </Link>
                        </button>
                        
                      </div>
            
                     
                    </div>
                    
                    <div className="flex flex-col xl:ml-32 items-center justify-between">
                      <div className="img"> 
                        <Image alt='no-image' src={'/assets/images/svg3.png'} height={300} width={300} />
                      </div>
            
            
                    </div>
            
            
            
            </div>
            
        </div>
  )
}

export default Hero
