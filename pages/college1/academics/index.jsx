import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import HeroAcademics from '../../../components/HeroAcademics/HeroAcademics'
import Anonymous from '../../../components/AnonymousReview/anonymous'
import Footer from "../../../components/Footer/Footer";
import Navbar from '../../../components/NavbarInCollege/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import React, {createContext} from "react";
import { withRouter } from "next/router";
import axios from "axios";



const userPage = (props) => {

    const {data: session } = useSession();
    


    return(
      <div className="overflow-hidden">

        {/*  hero section for academics  */}
        <Navbar userName={ (session?.user?.name) ? session.user.name.split(" ")[0] : 'login' } sectionName="academics" info={props.data}/>
        <HeroAcademics title={"Your feedback on academic programs is incredibly valuable."} subtitle={"The best way to pay it forward is by sharing your experience with those who come after you."} img= {'/assets/images/acad.jpg'} h={400} w={400}  />
        <div className="container overflow-hidden mx-auto ">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 mb-8">

           
            
            {
                props.data.map && props.academicData.map(item => <Post id={item._id} img={item.img} title={item.title} subtitle = {item.subtitle} description= {item.description} rating={item.reviews} ></Post>)
               
            }
            
            

        </div>

            {/* anonymous reviews  */}

        


    </div>
    <Anonymous />   
    <Footer />

    </div>
    )
};

export const getServerSideProps = async () => {

    const res= await axios.get('https://colleges-exposed.vercel.app/api/fetchout?db=test&collection=academics')

    const data = await res.data;

    const promises = data.map(async (x) => {

    const res2 = await axios.get(`https://colleges-exposed.vercel.app/api/fetchout?db=academic-reviews&collection=${x.title}`);
    
    const reviews = await res2.data;

    return { ...x, reviews };
  });

   const academicData = await Promise.all(promises);
 
    

    return {
        props:{
            data,
            academicData
        }
    };
        
};
// using this function .. next js will automatically detect that you want to render this page to the server and will call this function(getServerSideProps) at the very beginning .. and the whatever this function will return will get as the props to this file (userPage)





const getStars = (reviews) => {

  var totalRating = 0 ; 
  var totalCount = 0 ;
  let rating = 0 ; 

  {
    reviews.map((review) => {
      totalCount = totalCount + 1; 
      totalRating = totalRating + review.rating;
      rating = totalRating / totalCount; 
      rating = rating.toFixed(1);


    })

    
  }


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
  return {stars,rating,totalCount};
};




function Post({id,img,  title, subtitle, rating}){

    


    return(

      <section id="grid">
      <div  className="my-24 p-2  md:p-4  bg-gray-200 container h-56 w-[80%] md:w-80 mx-auto antialiased text-gray-900">
  <div className="w-full h-full">
    
    <Link href={`/college1/academics/${id}`}>
      <Image src={img} width={350} height={350} alt="random image" className="object-cover w-full h-full rounded-lg shadow-md" style={{ objectFit: 'cover' }} />
    </Link>


  <div className="relative px-4 -mt-12">


  <Link href={`/college1/academics/${id}`}>
            <div className="bg-white p-6  shadow-xl">

              <div className="flex items-baseline">
              
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider"></div>
              </div>

              <h4 className="mt-1 text-cyan-800 text-xl font-semibold uppercase leading-tight truncate">{title}</h4>

              <div className="flex items-center mr-4 py-1">
                {getStars(rating).stars}
              </div>

              <div className="mt-2">
                <span className="text-teal-600 text-md font-semibold">{getStars(rating).rating}/5 ratings </span>
                <span className="text-sm text-gray-600">(based on {getStars(rating).totalCount} ratings)</span>
              </div>

            </div>

            </Link>


  </div>



      
    </div>
  </div>



    </section>
    )
    
    
}

export default withRouter(userPage);