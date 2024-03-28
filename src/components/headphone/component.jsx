import { useState } from "react";
import { Codecs } from "../codecs/component";
import { HeadphoneDetails } from "../headphone-details/component";
import { Reviews } from "../reviews/component";
import { useEffect } from "react";
import { useCount } from "../../hooks/use-count";

/* eslint-disable react/jsx-key */
export const Headphone = ({ headphone }) => {
  const { amount, increment, decrement } = useCount();

  useEffect(() => {
    if (amount === 2) {
      increment();
    }
  }, [amount, increment]);

  if (!headphone) {
    return null;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <button onClick={decrement} disabled={amount === 0}>
          -
        </button>
        {amount}
        <button onClick={increment} disabled={amount === 5}>
          +
        </button>
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
