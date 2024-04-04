import { useSelector } from "react-redux";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => state.review.entities[reviewId]);

  if (!review) {
    return null;
  }

  return <div>{review.text}</div>;
};
