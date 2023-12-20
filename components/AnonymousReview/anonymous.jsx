import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const anonymous = () => {


  return (
    // h-[70vh] md:h-[50vh]
    <div className='mt-20 -mb-12 w-screen'>
      <div className='flex items-center justify-center  mb-12    custom-img9 '>
      {/* Overlay */}
    <div id="contact" className="z-20   md:text-lg container py-8 w-screen  bg-transparent mx-auto  overflow-hidden  "  >
                <div className="-xl container mt- px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-28 py-12 mx-auto text-gray-900 rounded-lg justify-between ">
                        <div className="flex flex-col justify-around">
                        <div className=''> 
                        <h2 className="text-2xl lg:text-4xl text-white font-bold leading-tight  font-mono">
                    Write an <span className='font-extrabold text-[#13fb03] font-serif'>Anonymous</span> review</h2>
                            
                            <h2 className="text-xl mt-4 text-white lg:text-2xl font-semibold leading-tight  font-mono">or share your incident with everyone Anonymously. </h2>

                            <button  className='rounded-full bg-[#13fb03] text-black py-2 px-6 my-4  mt-8  font-bold font-mono'>
                            <Link href='/college1/anonymous'>
                                Review Now
                            </Link>
                            </button>
                            
                        </div>

                        
                        </div>
                        
                        <div className="flex flex-col xl:ml-8 items-center justify-between">
                        <div className="img "> 
                            <Image src={'/assets/images/hacker1-removebg.png'} height={800} width={800} />
                        </div>


                        </div>



                </div>

        </div>

     </div>
    </div>
  )
}

export default anonymous
