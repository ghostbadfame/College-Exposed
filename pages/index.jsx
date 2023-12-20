import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Navbar/Hero';

import "slick-carousel/slick/slick.css";
import CollegeList from "../components/collegeList/CollegeList";
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

// next/auth 
import { useSession, signIn, signOut } from "next-auth/react"


const Home = () => {
  const heroHeading = 'EXPOSING COLLEGES SAVING LIVES';
  const subtitle = 'Rate and Review every single thing in your college.';
  const heroMessage = "Education should enlighten, not bankrupt you. Expose college for what it really is.";


  const {data: session } = useSession();
  const link = "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js";

  return (
    <div className='bg-[#fcf9f5] overflow-hidden'>
      <Head>
        <title>collegesExposed</title>
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='HTML , CSS , Javascript, next.js ' />
        <meta name='description' content='colleges Rating and Review System.' />
        <meta name='author' content='colleges exposed'  />
        <link rel='icon' href='/icon.png' />
        
      </Head>
        <Navbar userName = { (session?.user?.name) ? session.user.name.split(" ")[0] : 'login' } />
        <Hero heading= {heroHeading} subtitle={subtitle} message={heroMessage} />
      
      {/* <Slider slides={SliderData} /> */}
      <main className="font-bodyFont ">
        <CollegeList/>
      </main>
      <Footer/>
            

    </div>
  );
};

export default Home;
