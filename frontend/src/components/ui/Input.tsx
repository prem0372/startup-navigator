type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Input;