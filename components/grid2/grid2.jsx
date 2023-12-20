import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'
import { FaStar } from "react-icons/fa";
import userPage from '../../pages/college1/academics/index';
// import { count } from 'console';


const grid2 = (props) => {

  

 
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  xl:container xl:mx-auto z-50  '>
        <Card img= '/assets/images/academics.jpg' category={'Academics'}  page={'academics'} avg={ ((props.avgReviews[0].reviews[0].rating ) / (props.avgReviews[0].reviews[0].count)).toFixed(1)} count={(props.avgReviews[0].reviews[0].count)} />

            <Card img= '/assets/images/events.jpg' category={'Events'} page={'campuslife'} avg={ ((props.avgReviews[1].reviews[0].rating ) / (props.avgReviews[1].reviews[0].count)).toFixed(1)} count={(props.avgReviews[1].reviews[0].count)} />

            <Card img= '/assets/images/health.jpg' category={'Health & Care'} page={'health'} avg={ ((props.avgReviews[2].reviews[0].rating ) / (props.avgReviews[2].reviews[0].count)).toFixed(1)}  count={(props.avgReviews[2].reviews[0].count)}/>

            <Card img= '/assets/images/infrastructure.jpg' category={'Infrastructure'} page={'infrastructure'} avg={ ((props.avgReviews[3].reviews[0].rating ) / (props.avgReviews[3].reviews[0].count)).toFixed(1)} count={(props.avgReviews[3].reviews[0].count)} />


            <Card img= '/assets/images/sports.jpg' category={'Sports'} page={'sports'}  avg={ ((props.avgReviews[4].reviews[0].rating ) / (props.avgReviews[4].reviews[0].count)).toFixed(1)} count={(props.avgReviews[4].reviews[0].count)} />


            <Card img= '/assets/images/hostel.png' category={'Hostel & Mess'} page={'hostel'}  avg={ ((props.avgReviews[5].reviews[0].rating ) / (props.avgReviews[5].reviews[0].count)).toFixed(1)} count={(props.avgReviews[5].reviews[0].count)} />


    </div>
  )
}

const getStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {

      if(rating ==3 ){
        stars.push(<FaStar key={i} className="text-yellow-400 fill-current" />);
      }
      else if(rating < 3) {
        stars.push(<FaStar key={i} className="text-red-400 fill-current" />);
      }
      else{
        stars.push(<FaStar key={i} className="text-yellow-400 fill-current" />);

      }

      
    } else {
      stars.push(<FaStar key={i} className="text-gray-300 stroke-current" />);
    }
  }
  return stars;
};

function Card({ img, category, page , avg, count}) {
  return (
    // <div className="m-24 p-4 bg-gray-200 rounded-lg container h-56 max-w-max mx-auto antialiased text-gray-900">
    //   <div style={{ width: '100%', height: '100%' }}>
    //     <a href={`/college1/${page}`}>
    //       <Image src={img} width={350} height={350} alt="random image" className="object-cover w-full h-full rounded-lg shadow-md" style={{ objectFit: 'cover' }} />
    //     </a>

    <div className="my-24 p-2  md:p-4   bg-gray-200 container h-56 w-[80%] md:w-80 mx-auto antialiased text-gray-900">
  <div className="w-full h-full">
    
    <Link href={`/college1/${page}`}>
      <Image src={img} width={350} height={350} alt="random image" className="object-cover w-full h-full rounded-lg shadow-md" style={{ objectFit: 'cover' }} />
    </Link>


        <div className="relative px-4 -mt-12">

        <Link href={`/college1/${page}`}>
          <div className="bg-white p-6  shadow-xl">
            <div className="flex items-baseline">
             
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider"></div>
            </div>

            <h4 className="mt-1 text-cyan-800 text-xl font-semibold uppercase leading-tight truncate">{category}</h4>

            <div className="flex items-center mr-4 py-1">
                {
                  getStars(avg)
                }
              </div>
            <div className="mt-2">
              <span className="text-teal-600 text-md font-semibold">{avg}/5 ratings </span>
              <span className="text-sm text-gray-600">(based on {count} ratings)</span>
            </div>
          </div>
        </Link>
        
        </div>



      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    reviews: state.setReviews,
  };
};



export default grid2;
