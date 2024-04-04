import { Codecs } from "../codecs/component";
import { HeadphoneDetails } from "../headphone-details/component";
import { Reviews } from "../reviews/component";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

/* eslint-disable react/jsx-key */
export const Headphone = ({ headphoneId, className }) => {
  const { amount, increment, decrement } = useCount();
  const headphone = useSelector(
    (state) => state.headphone.entities[headphoneId]
  );

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
        <Codecs codecIds={codecs} />
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews reviewIds={reviews} />
      </div>
    </div>
  );
};
