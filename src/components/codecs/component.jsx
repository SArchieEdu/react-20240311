import { Codec } from "../codec/component";

/* eslint-disable react/jsx-key */

export const Codecs = ({ codecs }) => {
  return (
    <ul>
      {codecs.map((codec) => (
        <li>
          <Codec codec={codec} />
        </li>
      ))}
    </ul>
  );
};
