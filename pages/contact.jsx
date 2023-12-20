import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Image from 'next/image'
import { useSession, signIn } from "next-auth/react";




const Contact = () => {
  const session = useSession();
  const {data: session2 } = useSession();
   const userEmail = session?.data?.user?.email;
   async function handleOnSubmit(e) {
    e.preventDefault();

    if (!userEmail) {
      await signIn();
      return;
    }

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    location.reload();
    
  }
  return (
    <>
    
    <Navbar userName={ (session2?.user?.name) ? session2.user.name.split(" ")[0] : 'login' } />

{/* <div className='flex flex-col md:flex-row'> */}

  {/* <div className="left">
    <Image  src={'/assets/images/contactus.png'} width={400} height={400} />
  </div> */}


<section className="pb-20 relative pt-32 block bg-gray-900">
<div
className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
style={{ height: "80px" }}
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
    className="text-gray-900 fill-current"
    points="2560 0 2560 100 0 100"
  ></polygon> */}
</svg>
</div>

<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
<div className="flex flex-wrap text-center justify-center">
  <div className="w-full lg:w-6/12 px-4">
    <h2 className="text-4xl font-semibold text-white">
    Do you have something on your mind that you'd like to share with us?
    </h2>
    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
    Perhaps you have an idea or suggestion that could help us improve our platform. We'd love to hear from you. Simply fill out our form and one of our team members will be in touch with you soon. We value your input and look forward to hearing from you.
    </p>
  </div>
</div>

</div>
</section>


<div id="contact" className=" md:text-lg  bg-gray-50 shadow-xl  container mx-auto rounded-md " >
        <div className="-xl container mt- px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto text-gray-900 rounded-lg ">
                <div className="flex flex-col justify-between">
                  
                  <div className="mt-8 mx-auto md:mx-0 ">
                    <div>
                    </div>
                    <Image src={'/assets/images/contactus.png'} width={600} height={600} alt="" className="rounded-md " />
                  </div>
        
                </div>
        
        
              <div className="flex flex-col justify-start">
                 

              <div className='right '>




<section className="relative block py-24 -mb- lg:pt-0 bg-gray-900 ">
<div className="container mx-auto px-4">
<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
  <div className="w-full md:px-4 -mb-20">
    <div className="relative mb-16 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
      <form className="flex-auto p-5 lg:p-10 " method = "post" onSubmit={handleOnSubmit} >
        
         <h4 className="text-2xl font-semibold">
          Get in touch with us !
        </h4>
        
        <div className="relative w-full mb-3 mt-8" >
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="Full Name"
            required
            style={{ transition: "all .15s ease" }}
          />
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
                        type="email"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder={userEmail}
                        value={userEmail}
                        style={{ transition: "all .15s ease" }}
                        disabled
                      />
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows="4"
            cols="80"
            name="message"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            required
            placeholder="Type a message..."
          />
        </div>

        {
                          userEmail != null ?  <div className="mt-8">
                          <button 
                          id="submitButton"
                          type="submit"
                          
                          className="uppercase text-sm font-bold tracking-wide bg-gray-800 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                            Send message
                          </button>
                          
                        </div>

                        : 
                          <div className="mt-8">
                            <button 
                            onClick={() => signIn()}
                            className="uppercase text-sm font-bold tracking-wide bg-gray-800 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                              Sign In to continue
                            </button>
                          
                        </div>

                        }
       
      </form>
    </div>
  </div>
</div>
</div>
</section>
</div>
                   
                  


              </div>
        
        </div>
        
    </div>





{/* </div> */}
<Footer />
    </>
  )
}

export default Contact
