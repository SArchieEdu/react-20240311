import { useSelector } from "react-redux";
import { Button } from "../button/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";

export const HeadphoneTab = ({ headphoneId, isActive, onClick }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
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
