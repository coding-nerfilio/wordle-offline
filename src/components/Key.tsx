import "@/styles/globals.css";

const Key = ({
  handleInput,
  letter,
}: {
  handleInput: (letter: string) => any;
  letter: string;
}) => {
  return (
    <div
      className="select-none cursor-pointer flex justify-center items-center rounded text-center h-5 w-5 m-1 bg-gray-100 p-4 border border-grey hover:bg-blue-700 active:bg-blue-800 transition-transform duration-300 transform hover:scale-110"
      onClick={() => {
        handleInput(letter);
      }}
    >
      {letter}
    </div>
  );
};

export default Key;
