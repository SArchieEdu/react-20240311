import { SIZES } from "../../constants/sizes";
import { Button } from "../button/component";

export const Tab = ({ title, isActive, onClick }) => {
  return (
    <Button onClick={onClick} disabled={isActive}>
      {title}
    </Button>
  );
};
