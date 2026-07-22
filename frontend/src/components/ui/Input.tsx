type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border bg-white p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Input;