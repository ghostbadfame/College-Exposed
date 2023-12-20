import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "./Navbar";




const Reviews= (props) => {
  let imgUrl = [];
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const [imgUrl, setImgUrl] = useState<string>("");
  const [file, setFile] = useState([]);
  const dbName = props.db;
  const collectionName = props.collection;

  
  
  const total = props.rating[0].rating;
  const count  = props.rating[0].count;
  
  const session = useSession();
  const {data: session2 } = useSession();



  const userName = session?.data?.user?.name;

  


  const handleFileInputChange = () => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => ({ file, url: URL.createObjectURL(file) }));
    setFile([...file, ...newImages]);
  };

  function showAlert(message) {
  var alertBox = document.getElementById('alert-box');
  alertBox.innerHTML = message;
  alertBox.classList.remove('hidden');
  setTimeout(function() {
    alertBox.classList.add('hidden');
  }, 1000); // hide the alert box after 3 seconds
}

  const handleSubmit = async () => {
    
    event.preventDefault();
    if(rating === 0){
  showAlert("Please select a rating.");
  return;
}
    var button = document.getElementById("submitButton");
      if (button!=null) {
        if(button.innerHTML === "Click me")
        {
           button.innerHTML = "Submit";
        }
      else {
        button.innerHTML = "Uploading Review...";
      }
    }

    const uploaders = file.map(async (image) => {
      const data = new FormData();
      data.append("file", image.file);
      data.append("upload_preset", "uploads");

      const res = await axios.post("https://api.cloudinary.com/v1_1/dqarxwjx4/image/upload", data);
      return res.data.url;
    });

    
    // uploading this to cloudinary 
    try{

      
      const url = await Promise.all(uploaders);
      
      console.log("ashfl" + url);
      
      imgUrl = url; 
      
      const response = await axios.post("/api/reviews?db=" + dbName + "&collection=" + collectionName, {
        rating,
        comment,
        userName,
        imgUrl,
      });


      const totalCount = count + 1;
      const totalRating = total + rating;

      const response1 = await axios.post(`/api/reviews?db=avg-reviews&collection=${dbName}`, {
        totalCount,
        totalRating, 
      }) 
      

    }catch(err) {
      console.log(err);
    }
    location.reload();
    
  }
  
;


 return (
 <>
 <Navbar userName={ (session2?.user?.name) ? session2.user.name.split(" ")[0] : 'login' } />

    <form onSubmit={session.data != null ?  handleSubmit : undefined } className="  mx-2 md:mx-auto pt-2 ">

    <div id="contact" className=" md:text-lg  bg-gray-50 shadow-xl  container mx-auto rounded-md " >
            <div className="-xl container mt- px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto text-gray-900 rounded-lg ">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-purple-900">Give a Voice to Your Experience: Rate and Review Now!</h2>
                        <div className="text-gray-700 mt-8 md:text-xl">
                        "Your rate and review could be the key, to help others find what they need!"
                        </div>
                      </div>
            
                      <div className="mt-8 mx-auto md:mx-0 ">
                        <div>
                        </div>
                        <Image src={'/assets/images/svg1.png'} width={300} height={300} alt="no-image" className="rounded-md " />
                      </div>
            
                    </div>
            
            
                    <div className="flex flex-col justify-start">
                      <div>
                        <span  className="uppercase text-sm text-gray-800 font-bold">Rating :</span>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`h-8 w-8 text-yellow-500 ${
                                index < rating ? "fill-current" : "fill-current opacity-25"
                              }`}
                              onClick={() => setRating(index + 1)}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <label htmlFor="comment" className="uppercase text-sm text-gray-800 font-bold">Write a Review :</label>
                        <textarea
                        id="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"  />

                      </div>

                       <div className="image-upload flex flex-col ">
                              <label htmlFor="image" className="uppercase text-sm text-gray-800 font-bold  py-2 md:py-3 " >
                                Choose an image :
                              </label>
                              <input type="file" className="mx-2" multiple onChange={handleFileInputChange} />
                        </div>


                        {
                          session.data != null ?  <div className="mt-8">
                          <button 
                          id="submitButton"
                          type="submit"
                          className="uppercase text-sm font-bold tracking-wide bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                            Submit
                          </button>
                          
                        </div>

                        : 
                          <div className="mt-8">
                            <button 
                            onClick={() => signIn()}
                            className="uppercase text-sm font-bold tracking-wide bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                              Sign In to continue
                            </button>
                          
                        </div>

                        }

                      


                </div>
            
            </div>
            
        </div>
    

      

      
    </form>
<div id="alert-box" class="hidden bg-red-500 backdrop-blur-sm text-white px-4 py-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 rounded-lg text-2xl">
  Please select a rating.
</div>

    
      </>
  );
};

export default Reviews;
