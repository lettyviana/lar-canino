type StandardButtonProps = {
  children: string;
  styleType?: any;
  whichType: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export const StandardButton = ({
  children,
  styleType,
  whichType,
  onClick
}: StandardButtonProps) => {
  return (
    <button
      className={`${"standard-button"} ${[styleType]}`}
      type={whichType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
