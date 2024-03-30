import { GUESS_LETTER_RESULT, GuessLetter } from "@/hooks/useGame";
import "@/styles/globals.css";

export type BlockState = {
  selected: boolean;
};

const Block = (props: { guess: GuessLetter; state: BlockState }) => {
  const backgroundColor = () => {
    if (props.guess.status === GUESS_LETTER_RESULT.CORRECT)
      return "bg-green-300";
    if (props.guess.status === GUESS_LETTER_RESULT.BAD_POSITION)
      return "bg-orange-300";
    if (props.guess.status === GUESS_LETTER_RESULT.UNUSED) return "bg-gray-300";
    if (props.guess.status === GUESS_LETTER_RESULT.UNDEFINED) return "bg-white";
  };

  const borderColor = () => {
    if (props.state.selected) return "border-blue-500";
    return "border-gray";
  };

  return (
    <div
      className={`${backgroundColor()} h-10 w-10 border ${borderColor()} m-1 text-center content-center`}
    >
      {props.guess.letter}
    </div>
  );
};

export default Block;
