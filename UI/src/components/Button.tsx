type Props = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: Props) => {
  return (
    <button onClick={onClick} style={{ padding: "10px" }}>
      {title}
    </button>
  );
};

export default Button;