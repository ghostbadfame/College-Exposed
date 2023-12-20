import React from "react";
import { FaStar } from "react-icons/fa";
import { VideoBackground } from "../bg/VideoBackground";



const Hero = ({heading , subtitle, avgReviews}) => {


  let totalReviews = 0;
  let totalCount = 0 ; 
  for(let i = 0 ; i < 6; i++){
    totalReviews += avgReviews[i].reviews[0].rating;
    totalCount += avgReviews[i].reviews[0].count;

  }

  const finalRating = totalReviews / totalCount;




  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {

        if(rating ==3 ){
          stars.push(<FaStar key={i} className="text-yellow-400  h-5 w-5  md:h-8  md:w-8  fill-current" />);
        }
        else if(rating < 3) {
          stars.push(<FaStar key={i} className="text-red-400 h-5 w-5  md:h-8 w-8  fill-current" />);
        }
        else{
          stars.push(<FaStar key={i} className="text-yellow-400 h-5 w-5  md:h-8 md:w-8 fill-current" />);

        }

        
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 h-5 w-5  md:h-8 md:w-8  stroke-current" />);
      }
    }
    return stars;
  };



  return (
    

    <div   className="flex relative w-full h-full custom-img2 items-end   justify-center uppercase">
        
         

<div className="flex flex-col absolute container items-center  w-full h-full z-10 md:p-10 text-white pt-32">
        
        <div className="flex font-bold flex-col my-auto w-[70%]  items-center justify-center p-4 rounded-3xl ">

        <h2 className='newfont text-6xl md:text-8xl mt-26 text-center font-bold tracking-widest  '>{heading}</h2>
        
      
        <p className='pt-5 text-lg md:text-xl  text-center'>{subtitle}</p>

        <div className="flex  items-center  justify-center py-1">
          <span className="font-bold   text-2xl py-1 md:mr-2 ">Rating: 
          </span>
                {getStars(finalRating.toFixed(0))  }
                
                <span className="text-xl lg:text-2xl ml-1" > ({ finalRating.toFixed(0)})</span>

                

                

        </div>
        <span  className="font-bold text-white text-xl">
                based on {totalCount} reviews

          </span> 
            
            
        </div>
      
    </div>

    <VideoBackground />



          
        </div>


  );
};

export default Hero;