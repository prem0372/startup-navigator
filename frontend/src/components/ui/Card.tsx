type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      {children}
    </div>
  );
}

export default Card;