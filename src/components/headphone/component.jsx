import { Codecs } from "../codecs/component";
import { Reviews } from "../reviews/component";

/* eslint-disable react/jsx-key */
export const Headphone = ({ headphone }) => {
  if (!headphone) {
    return null;
  }

  const { name, brand, type, maxVolume, codecs, reviews } = headphone;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <p>{brand}</p>
        <p>{type}</p>
        <p>{maxVolume}</p>
      </div>
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
