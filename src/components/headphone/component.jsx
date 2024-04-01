import { Codecs } from "../codecs/component";
import { HeadphoneDetails } from "../headphone-details/component";
import { Reviews } from "../reviews/component";
import { useEffect } from "react";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import { SIZES } from "../../constants/sizes";

import styles from "./styles.module.scss";

/* eslint-disable react/jsx-key */
export const Headphone = ({ headphone, className }) => {
  const { amount, increment, decrement } = useCount();

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
        <Codecs codecs={codecs} />
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};
