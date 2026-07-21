type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function Card({
  children,
  className = "",
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border bg-white p-6 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;