import styles from "./standard-button.module.scss";

type StandardButtonProps = {
  children: string;
  styleType?: any;
  whichType: "button" | "submit" | "reset" | undefined;
};

export const StandardButton = ({
  children,
  styleType,
  whichType,
}: StandardButtonProps) => {
  return (
    <button
      className={`${styles["standard-button"]} ${styles[styleType]}`}
      type={whichType}
    >
      {children}
    </button>
  );
};
