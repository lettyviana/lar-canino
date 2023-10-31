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
      className={`${"standard-button"} ${[styleType]}`}
      type={whichType}
    >
      {children}
    </button>
  );
};
