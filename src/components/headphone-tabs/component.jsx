import { Tab } from "../tab/component";

/* eslint-disable react/jsx-key */
export const HeadphoneTabs = ({ headphones, onTabClick, currentIndex }) => {
  return (
    <div>
      {headphones.map((headphone, index) => (
        <Tab
          title={headphone.name}
          isActive={index === currentIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};
