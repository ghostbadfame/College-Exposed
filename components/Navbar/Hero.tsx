import Link from "next/link";
import React from "react";

type Props = {
  heading: string;
  subtitle: string;
  message: string;
}

const Hero: React.FC<Props> = ({heading , subtitle, message}) => {
  return (
    // <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
    //   {/* Overlay */}
    //   <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      // <div className='p-5 text-white z-[2]  mt-[-5rem]'>
      //   <h2 className='text-3xl md:text-5xl mt-32  font-bold'>{heading}</h2>
      //   <p className='pt-5 text-xl'>{subtitle}</p>
      //   <p className='py-5 text-xl'>{message}</p>
      //   <button className='px-8 py-2 border text-black bg-white rounded-b-lg rounded-tl-lg font-bold'>Expose Now</button>
      // </div>
    // </div>



    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen lg:h-[80vh]"
>
          <div className="absolute top-0 w-full h-full bg-center bg-cover custom-img"
              // style={{
              //   backgroundImage: 'custom-img'
              // }}
              >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto xl:w-[90%]">
              <div className="items-center flex flex-wrap">
              <div className='p-5 text-white z-[2]  mt-[-5rem]'>
        <h2 className='text-3xl md:text-5xl mt-32  font-bold'>{heading}</h2>
        <p className='pt-5 text-xl'>{subtitle}</p>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border text-black bg-white rounded-md font-bold'>
          <Link href='/college1'>
            Expose Now
          </Link>
          
          </button>
      </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0"
              ></polygon> */}
            </svg>
          </div>
        </div>
  );
};

export default Hero;