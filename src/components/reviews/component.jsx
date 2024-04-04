import { Review } from "../review/component";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <li>
          <Review reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
