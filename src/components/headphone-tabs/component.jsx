import { useSelector } from "react-redux";
import { HeadphoneTab } from "../headphone-tab/component";
import { selectHeadphoneIds } from "../../redux/entities/headphone/selectors";

/* eslint-disable react/jsx-key */
export const HeadphoneTabs = ({ onTabClick, currentHeadphoneId }) => {
  const headphoneIds = useSelector(selectHeadphoneIds);

  return (
    <div>
      {headphoneIds.map((headphoneId) => (
        <HeadphoneTab
          headphoneId={headphoneId}
          isActive={headphoneId === currentHeadphoneId}
          onClick={() => onTabClick(headphoneId)}
        />
      ))}
    </div>
  );
};
