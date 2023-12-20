import { FaStar } from "react-icons/fa";
import { FaUserCircle, FaUser } from "react-icons/fa";
import Image from 'next/image'
import ImageComponent from '../reviews/ImageComponent';
import React from "react";
import { useSession,signIn,getSession } from "next-auth/react";
import axios from "axios";



import dynamic from "next/dynamic";

const BarGraph = dynamic(
        import("../../components/reviews/BarGraph"),
        { ssr: false }
    );



const UserReviews = (props) => {
    const reviews = props.reviews;
    const session = useSession();
    const userEmail = session?.data?.user?.email;

  const [isEnlarged, setIsEnlarged] = React.useState(false);
   const handleClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleDelete = async(review) => {
    try{ 
      const response = await axios.delete("/api/reviews?db=anonymous&collection=anonymous-reviews&id=" + review._id) 
      location.reload();      
      }

      catch(err){
        console.log(err);
      }   
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
          stars.push(<FaStar key={i} className="text-green-400 fill-current" />);

        }

        
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 stroke-current" />);
      }
    }
    return stars;
  };

  var totalRating = 0 ; 
  var totalCount = 0 ;
  let averageRating = 0 ; 

  {
    reviews.map((review) => {
      totalCount = totalCount + 1; 
      totalRating = totalRating + review.rating;
      averageRating = totalRating / totalCount; 
      averageRating = averageRating.toFixed(1);
    })
  }

  
  return (
   


    <div className=" container lg:w-2/3  mx-auto mt-10 md:mt-20 ">
      
      
      <div className="total-review-section  overflow-hidden mx-auto mb-10 md:mb-20">
        
        <div className="left flex mx-auto ">
          <h1 className="font-semibold text-lg text-2xl lg:text-4xl text-white ">Reviews</h1>
        </div>

        <div className="main flex flex-col lg:flex-row justify-evenly ">

        

        <div className="flex flex-col items-center justify-evenly  md:flex-row lg:space-x-10 text-white ">
          
          <div className="1 my-6 border-2 shadow-xl rounded p-4 justify-center items-center w-56  ">
            <h1 className="pb-2">Total Reviews</h1>
            <h1 className="text-2xl pb-2 font-semibold md:text-4xl">{totalCount}</h1>
            <h1 className="text-white0"> Reviews this year</h1>
          </div>


          <div className="1 my-6 border-2 shadow-xl rounded p-4 justify-center items-center  w-56 ">
            <h1 className="pb-2">Average Rating</h1>
            <span className="flex pb-2 ">
            <h1 className="text-2xl font-semibold md:text-4xl ">{averageRating}</h1>
              
              <div className="flex items-center mr-4">
                {getStars(averageRating)}
              </div>
            </span>
            <h1 className="text-white0">Average rating this year</h1>
          </div>

        </div>

        
        <div className="chart flex items-center justify-center">
          <BarGraph reviews={reviews} />
        </div>
          

        </div>
        

        <h1 className="border-b-2 font-medium"></h1>


        


    <div className="usersReviews mt-10 p-2">
      {
        reviews.length > 0 ? reviews.map((review) => (

          // totalCount = totalCount + 1,
          // totalRating = totalRating + review.rating , 
          
          <div className="card mb-16">

          <div className=" main flex flex-col md:flex-row md:space-x-16">

            <div className="left flex items-start md:w-[30%]  mb-6 md:mb-0">
                <div className="profile flex flex-row  space-x-3">
                  <Image src={'/assets/images/hacker.jpeg'} className="rounded-sm" height={40} width={80} />
                    

                    <span className="flex flex-col ">
                      <h1 className="font-semibold text-xl text-white">Anonymous</h1>

                    </span>
                </div>  
            </div>

            <div className="right  md:w-[60%] flex flex-col justify-evenly ">

              {
                review.rating >= 3 ? 
                <div className="rating  max-w-max rounded-lg p-2 border-yellow-300 md:text-lg mb-2 ">
                <div className="flex items-center mr-4 text-xl">
                {getStars(review.rating)}   ({review.rating}.0)
                </div>
              </div>
              : 
              <div className="rating  max-w-max rounded-lg p-2 border-red-500  text-red-600 md:text-lg mb-2 ">
                <div className="flex items-center mr-4 text-xl">
                {getStars(review.rating)}   ({review.rating}.0)
                </div>
              </div>

              }

              

              <div className="comment md:text-lg text-white">
                <h1> 
                  {review.comment}
                </h1>
              </div>

              <div className="max-w-max">
                {/* {
                  review.imgUrl != null || review.imgUrl != "" ? 
                  <ImageComponent review={reviews}  />
                  : 
                  <div></div>
                }
                 */}
{/* flex flex-col md:flex-row p-2 space-y-4 md:space-y-0 mx-auto    md:space-x-4 max-w-max */}
                 
                <ImageComponent imgUrls={review.imgUrl}/>
              </div>

              <div className="flex border-2 p-2 my-2 max-w-max border-gray-300 rounded-md text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>

                <h1 className="ml-2 text-white" >Public comment</h1>
              </div>

              {
                userEmail=="ayushchamoli001@gmail.com" || userEmail=="ashutoshnautiyal94@gmail.com"  ? <div>
                <button onClick={() => handleDelete(review)} className="uppercase text-sm font-bold tracking-wide bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-100 p-3 rounded-full w-fit focus:outline-none focus:shadow-outline" >Delete review</button>
              </div> : 
              <div>
               
              </div>
              }
              

              

            </div>

          </div>

        </div>

        )).reverse():
        <p>No reviews</p>
      }

        
      </div>
  </div>
    </div>
  );
};




export default UserReviews;



