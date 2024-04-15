import { useGetHeadphonesQuery } from "../../redux/service/api";
import { HeadphoneTab } from "../headphone-tab/component";

import styles from "./styles.module.css";

/* eslint-disable react/jsx-key */
export const HeadphoneTabs = () => {
  const { data: headphones, isLoading } = useGetHeadphonesQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!headphones) {
    return null;
  }

  return (
    <div className={styles.root}>
      {headphones.map((headphone) => (
        <HeadphoneTab headphone={headphone} className={styles.tab} />
      ))}
    </div>
  );
};
