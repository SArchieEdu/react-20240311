import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return <div>{review.text}</div>;
};
