import { useSelector } from "react-redux";
import { HeadphoneTab } from "../headphone-tab/component";

/* eslint-disable react/jsx-key */
export const HeadphoneTabs = ({ onTabClick, currentHeadphoneId }) => {
  const headphoneIds = useSelector((state) => state.headphone.ids);

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
