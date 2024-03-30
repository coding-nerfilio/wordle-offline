import "@/styles/globals.css";

const Button = ({
  text,
  onclick,
  className,
  color,
}: {
  text: string;
  color?: string;
  onclick: () => any;
  className?: string;
}) => {
  return (
    <div
      className={`select-none cursor-pointer ${className} ${
        color ? color : "bg-blue-300"
      } px-2 py-1 rounded transition-transform duration-300 transform hover:scale-110`}
      onClick={onclick}
    >
      {text}
    </div>
  );
};

export default Button;
