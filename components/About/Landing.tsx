import Image from "next/image";
import React from "react";
import Contact from "../../pages/contact";


type Props = {}

const Landing = (props: Props): JSX.Element => {
  return (
    <div>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/assets/images/about.avif')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-center">
                  <div className="md:pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                    The Voice of College Students: 
                    </h1>
                    <p className="mt-4 text-xl   text-gray-300">
                    A Comprehensive Platform for College Comparisons and Reviews.
                    </p>
                  </div>
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
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-black bg-purple-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full font-bold ">
                      
                      <h1>
                        1
                      </h1>
                    </div>
                    <h6 className="text-xl font-semibold">Our Vision</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Empower college students to make informed decisions and take control of their education.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                  <div className="px-4 py-5 flex-auto">
                    <div className="font-bold p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-100 ">
                      2
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Mission
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Create a community of transparency and honesty that fosters meaningful and constructive feedback, enhancing the college experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                  <div className="px-4 py-5 flex-auto">
                    <div className="font-bold  p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-100">
                      3
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Values
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    We are committed to transparency and honesty, creating a safe space for students to share their experiences and insights. 
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Who are we ? 
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                With a passion for innovation and a drive to enhance the college experience, we, a group of diligent college undergraduates, have embarked on a journey to create a unique platform. 
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Our aim is to provide a comprehensive and transparent platform for college students to rate and review every aspect of their college life, ranging from the academic departments and library facilities to sports facilities, college infrastructure, and beyond. 
                </p>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <img
                    alt="..."
                    src="/assets/images/coder-removebg2.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
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
              
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Image
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"/assets/images/hacker.jpeg"}
                  height={700}
                  width={700}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-3xl font-semibold">
                    Something Special
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-800">
                  Our platform offers an anonymous review section, providing students with a secure avenue to share their experiences and incidents with others. Ultimately, our goal is to empower students to make informed decisions by allowing them to compare colleges and access genuine reviews from their fellow students.  
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>


      <Contact />
      </main>
    </div>
  )
}

export default Landing;