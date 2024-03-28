import { GUESS_RESULT } from "../types";
import "@/styles/globals.css";

export type BlockState = {
  Letter: undefined | string;
  Status: GUESS_RESULT;
};

const Block = (props: { state: BlockState }) => {
  const backgroundColor = () => {
    if (props.state.Status === GUESS_RESULT.CORRECT) return "bg-green-500";
    if (props.state.Status === GUESS_RESULT.BAD_POSITION)
      return "bg-orange-500";
    if (props.state.Status === GUESS_RESULT.UNUSED) return "bg-gray-500";
  };

  return <div className={`${backgroundColor()}`}>{props.state.Letter}</div>;
};

export default Block;
