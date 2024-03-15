type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
};
