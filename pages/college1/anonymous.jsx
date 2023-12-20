import React from 'react'
import Reviews from '../../components/AnonymousReview/Reviews'
import UserReviews from '../../components/AnonymousReview/UserReviews'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';


const anonymous = (props) => {
 
  return (
    
    <div className='bg-gray-800 '>

        <Navbar  /> 
        <Reviews />
        <UserReviews  reviews={props.reviews} />
        <Footer />
    </div>
    
  )
}


export const getServerSideProps = async(context , props) => {



  const res1  = await axios.get('https://colleges-exposed.vercel.app/api/fetchout?db=anonymous&collection=anonymous-reviews');
  const reviews = await res1.data;

  return {
      props: {
          reviews
      }
  }
}


export default anonymous;
