import classNames from "classnames";
import styles from "./styles.module.scss";
import { SIZES } from "../../constants/sizes";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = "primary",
  size = SIZES.m,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        styles[size],
        styles[viewVariant],
        className,
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {theme}
      {children}
    </button>
  );
};
