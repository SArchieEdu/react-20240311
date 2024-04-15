import { Codecs } from "../codecs/component";
import { HeadphoneDetails } from "../headphone-details/component";
import { Reviews } from "../reviews/component";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";

import styles from "./styles.module.scss";
import { selectProductAmount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../../redux/ui/cart";
import { useGetHeadphonesQuery } from "../../redux/service/api";
import { NewReviewForm } from "../new-review-form/component";
import { useParams } from "react-router-dom";

/* eslint-disable react/jsx-key */
export const Headphone = ({ className }) => {
  const { headphoneId } = useParams();

  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === headphoneId),
    }),
  });

  const dispatch = useDispatch();
  const amount = useSelector((state) =>
    selectProductAmount(state, headphoneId)
  );
  const increment = () => dispatch(incrementProduct(headphoneId));
  const decrement = () => dispatch(decrementProduct(headphoneId));

  if (!headphone) {
    return null;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <div className={className}>
      <div>
        <h2>{name}</h2>
        <div>
          <Button
            onClick={decrement}
            disabled={amount === 0}
            viewVariant="primary"
            className={styles.action}
          >
            -
          </Button>
          {amount}
          <Button
            onClick={increment}
            disabled={amount === 5}
            viewVariant="primary"
            className={styles.action}
          >
            +
          </Button>
        </div>
      </div>
      <HeadphoneDetails headphone={headphone} />
      <div>
        <h3>Codecs</h3>
        <Codecs headphoneId={headphoneId} />
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews headphoneId={headphoneId} />
        <NewReviewForm headphoneId={headphoneId} />
      </div>
    </div>
  );
};
