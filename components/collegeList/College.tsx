import Image from "next/image";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import pic from "../../public/assets/images/droneCollege.jpeg"

import Stars from "./Stars";

interface CollegeProps {
  name: string;
  description: string;
  rating: number;
}

const CollegeCard: React.FC<CollegeProps> = ({
  name,
  description,
  rating,
}) => {
  return (
    
 <div className="college-container">
        {/* Image */}
            <Image
            className="image"
            src={pic}
            alt="College"
            />
        {/* Content */}
        <div className="content">
            <div className="details">
                <h2>{name}</h2>
                <span >Ghurdauri, Pauri</span>
            </div>
            <div className="ratings">
            <h3>State University (Autonomous) </h3>
            {/* <div className="stars">
                <Stars rating={3} maxRating={5} />
                <span>100reviews</span>
            </div> */}
            
            </div>
            <div className="details">
            <p className="">{description}</p>
            </div>
            </div>

            <div className="stats">
            <div className="fees">
                <span>Tution fee</span>
                <h2>31,000 rs</h2>
            </div>
            <div className="enrollment">
                <span>Students enrolled</span>
                <h2>1577</h2>
            </div>
            <div className="nrif">
                <span>NIRF Ranking</span>
                <h2>NA</h2>
            </div>
        </div>
        </div>   );
};

export default CollegeCard;

