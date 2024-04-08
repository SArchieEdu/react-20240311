import { useEffect } from "react";
import { Review } from "../review/component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectHeadphoneReviewIds } from "../../redux/entities/headphone/selectors";
import { getReviewsByProductId } from "../../redux/entities/review/thunks/get-reviews-by-product-id";

/* eslint-disable react/jsx-key */
export const Reviews = ({ headphoneId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByProductId(headphoneId));
  }, [headphoneId]);

  const reviewIds = useSelector((state) =>
    selectHeadphoneReviewIds(state, headphoneId)
  );

  if (!reviewIds?.length) {
    return null;
  }

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
