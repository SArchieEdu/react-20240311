import { Codec } from "../codec/component";

/* eslint-disable react/jsx-key */

export const Codecs = ({ codecIds }) => {
  return (
    <ul>
      {codecIds.map((codecId) => (
        <li>
          <Codec codecId={codecId} />
        </li>
      ))}
    </ul>
  );
};
