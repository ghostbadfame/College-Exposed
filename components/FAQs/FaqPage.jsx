import Image from 'next/image';
import FaqAccordion from '../FAQs/FaqAccordion'


const FaqPage = () => {
  return (
    <div className="dark py-16 ">
      <div className=' '>

        {/* <div className='md:hidden max-w-max mx-auto  -my-24  '> 
          <Image src={'/assets/images/faq.jpg'} height={400} width={400} ></Image>
        </div> */}

        <div className='  block max-w-max mx-auto -mb-4'> 
          <Image alt='no-image' src={'/assets/images/faq.jpg'} height={600} width={600} ></Image>
        </div>




        <FaqAccordion />
      </div>
    </div>
  );
};

export default FaqPage;
