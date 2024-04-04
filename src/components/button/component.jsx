import classNames from "classnames";
import styles from "./styles.module.scss";
import { SIZES } from "../../constants/sizes";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = "primary",
  size = SIZES.m,
}) => {
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
      {children}
    </button>
  );
};
