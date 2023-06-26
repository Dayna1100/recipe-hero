
import { FaStar } from 'react-icons/fa';

  
const StarRating = ({ rating }) => {
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
  
          return (
            <label key={index}>
              <FaStar
                className="star"
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              />
            </label>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;