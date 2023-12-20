import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"




export default function Logout() {
  const session = useSession()    

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                  'url("/assets/images/bg.png")',
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}
              
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                      <h1>Hello {session?.data?.user?.name}</h1>
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">


                      
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={signOut}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={"assets/images/google.svg"}
                        />
                        SignOut
                      </button>
                    </div>
                    <div className="text-center mt-8"><Link href={'/'}> Redirect to the main page !</Link></div>
              
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}