interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success"; // the ? lets the TS compiler know that this property is optional. Using this harcoded union list allows us to restrict the values of 'color' to this list
  onClick: () => void;
}

const FirstButton = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default FirstButton;