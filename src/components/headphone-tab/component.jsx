import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export const HeadphoneTab = ({ headphone, className }) => {
  return (
    <NavLink
      to={`/headphones/${headphone.id}`}
      className={({ isActive }) =>
        classNames(styles.tab, className, { [styles.active]: isActive })
      }
    >
      {headphone.name}
    </NavLink>
  );
};
