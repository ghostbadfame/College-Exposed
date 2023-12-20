import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
            style={{ ...style, display: "block", background: "black" , borderRadius: 100 , padding:15  ,display:"flex", justifyContent: "center", alignItems:"center"}}

      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius: 100 , padding:15  ,display:"flex", justifyContent: "center", alignItems:"center"}}
      onClick={onClick}
    />
  );
}




const ImageSlider = (props) => {
  const sliderRef = useRef(null);
  const urls = props.imgUrls;
  const [isModalOpen , setModal] = useState(false);
  const [isCarouselOpen , setCarousel] = useState(false);


  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  });

  const handleSlideClick = () => {
    setCarousel(true);
    setModal(true);
  };
  const closeModal = () => {
    setCarousel(false);
    setModal(false);
  }

  return (
    <div>
      {
        isCarouselOpen ? (
          <div>
            <div class="hidden md:block">
                <div isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center -my-8">
                  <div class=" w-[80%] h-[80%] items-center justify-center  mt-20">

                  <div class="relative bg-white rounded-lg shadow dark:bg-transparent">
                    
                  <button type="button" class="text-gray-100 bg-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-4 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white " onClick={closeModal}>
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                      </button>
                  <Slider ref={sliderRef} {...sliderSettings}> 
                  
                    {
                       urls.map((url) => (
                        <div  className="flex items-center justify-center h-[600px] w-[800px] relative ">
    <Image
    key={url}
      src={url}
      alt="Image description"
      layout="fill"
          objectFit="contain"
    />
  </div>

                       ))
                    
                    
                    }
                  
                </Slider>
                </div>
                </div>
              </div>
              </div>
              <div class="block md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-6 md:space-y-0 ">
                  {
                  urls.map((url) => (
                      <div  key={url} onClick={handleSlideClick}>
                        <Image src={url} alt={url} height={300} width={300} className=""/>
                      </div>
                     ))
                    
                  
                }
                  
                </div>

          </div> 
              
            ) : 
            
            
            
            (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-6 md:space-y-0">
               {
                  urls.map((url) => (
                      <div  key={url} onClick={handleSlideClick}>
                        <Image src={url} height={300} width={300} alt={url}/>
                      </div>
                     ))
                    
                  
                }
              </div>
        )
        
        
        }

    </div>
    
  );
};

export default ImageSlider;
