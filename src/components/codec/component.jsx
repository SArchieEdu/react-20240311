import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codec/selectors";

export const Codec = ({ codecId }) => {
  const codec = useSelector((state) => selectCodecById(state, codecId));

  if (!codec) {
    return null;
  }
  return <span>{codec.type}</span>;
};
