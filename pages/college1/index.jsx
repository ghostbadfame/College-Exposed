import React, { useState, useEffect, useRef } from 'react';
import Grid2 from '../../components/grid2/grid2'
import FaqPage from '../../components/FAQs/FaqPage'
import Anonymous from '../../components/AnonymousReview/anonymous';
import Footer from '../../components/Footer/Footer';
import { withRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Navbar from '../../components/NavbarCollege1/Navbar';
import Hero from '../../components/NavbarCollege1/HeroCollege1';
import axios from 'axios';
import Head from 'next/head'

// import { parseCookies } from 'nookies';



const userPage = (props) => {

  const heroHeading = 'GBPIET';
  const subtitle = 'Pauri Garhwal, Uttarakhand';
 

  const {data: session } = useSession();



  return (
    <div className='dark2 overflow-hidden'>

      <Head>
        <title>collegesExposed</title>
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='HTML , CSS , Javascript, next.js ' />
        <meta name='description' content='colleges Rating and Review System.' />
        <meta name='author' content='colleges exposed'  />
        <link rel='icon' href='/icon.png' />
        
      </Head>

        <Navbar userName={ (session?.user?.name) ? session.user.name.split(" ")[0] : 'login' } />
        <Hero heading= {heroHeading} subtitle={subtitle} avgReviews={props.avgReviews} />


        {/* <div>myVariable value is : {myVariable}</div> */}

        {/* <Grid /> */}
        <Grid2 avgReviews={props.avgReviews} />

         <Anonymous />

        <FaqPage />

        <Footer />



    </div>
  )
}


export const getServerSideProps = async(context , props) => {

      const titles = ["academic-reviews" , "campuslife-reviews" , "health-reviews" , "infrastructure-reviews" , "sports-reviews", "hostel-reviews" ]
      const promises = titles.map(async (x) => {

      const res = await axios.get(`https://colleges-exposed.vercel.app/api/fetchout?db=avg-reviews&collection=${x}`); 
         
      const reviews = await res.data;

       return { reviews };
  });

  const avgReviews = await Promise.all(promises);
      

 


    return {
        props: {
            avgReviews
        }
   
    }
}

export default withRouter(userPage);