import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
  rating: number;
  maxRating?: number;
  starSize?: number;
  fullStarColor?: string;
  emptyStarColor?: string;
}

const Stars: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  starSize = 20,
  fullStarColor = "#ffc107",
  emptyStarColor = "#e4e4e4"
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex ">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar
          key={i}
          size={starSize}
          color={fullStarColor}
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt
          size={starSize}
          color={fullStarColor}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar
          key={i + fullStars + (hasHalfStar ? 1 : 0)}
          size={starSize}
          color={emptyStarColor}
        />
      ))}
    </div>
  );
};

export default Stars;
