import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HeroAcademics = ({title , subtitle, img , h , w }) => {
  return (
    <>
        <div className="hidden md:block bg-gray-800  h-[400px] md:-mb-[25rem]  ">


        </div>
    
        <div id="contact" className="-z-10    md:text-lg container py-8  bg-gray-100 mx-auto  overflow-hidden xl:w-[90%]  "  >
                <div className=" container mt- px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-12 mx-auto text-gray-900 rounded-lg justify-between ">
                        <div className="flex flex-col justify-around">
                        <div> 
                            <h2 className="text-2xl lg:text-4xl text-gray-700 font-bold leading-tight ">{title} </h2>
                            
                            <h2 className="text-xl mt-4 text-indigo-900 lg:text-2xl font-semibold leading-tight ">{subtitle}</h2>

                            <button  className='bg-gray-700 py-2 px-6 my-4  text-white font-bold'>
                            <a href='#grid' className=' scroll-smooth  ease-in delay-300'>
                                Review Now
                            </a>
                            </button>
                            
                        </div>

                        
                        </div>
                        
                        <div className="flex flex-col xl:ml-32 items-center justify-between">
                        <div className="img "> 
                            <Image src={img} height={h} width={w} />
                        </div>


                        </div>



                </div>

        </div>
</>
  )
}

export default HeroAcademics
