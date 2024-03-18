import { Review } from "../review/component";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
