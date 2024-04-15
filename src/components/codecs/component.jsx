import { useGetCodecsQuery } from "../../redux/service/api";
import { Codec } from "../codec/component";

/* eslint-disable react/jsx-key */

export const Codecs = ({ headphoneId }) => {
  const { data: codecs, isFetching } = useGetCodecsQuery(headphoneId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (!codecs.length) {
    return null;
  }

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
