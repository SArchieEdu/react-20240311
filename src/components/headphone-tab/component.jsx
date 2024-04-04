import { useSelector } from "react-redux";
import { Button } from "../button/component";

export const HeadphoneTab = ({ headphoneId, isActive, onClick }) => {
  const headphone = useSelector(
    (state) => state.headphone.entities[headphoneId]
  );

  if (!headphone) {
    return null;
  }

  return (
    <Button onClick={onClick} disabled={isActive}>
      {headphone?.name}
    </Button>
  );
};
