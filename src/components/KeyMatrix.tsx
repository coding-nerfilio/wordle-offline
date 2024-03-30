import { AVAILABLE_LETTERS } from "@/constants";
import Key from "@/components/Key";
import "@/styles/globals.css";

const KeyMatrix = ({
  handleInput,
  handleDelete,
}: {
  handleInput: (letter: string) => any;
  handleDelete: () => any;
}) => {
  const KeyRow = ({
    indexStart,
    indexEnd,
    delKey,
  }: {
    indexStart: number;
    indexEnd: number;
    delKey?: boolean;
  }) => {
    return (
      <div class="flex flex-row justify-center">
        {[...AVAILABLE_LETTERS]
          .slice(indexStart, indexEnd)
          .map((letter, letterIdx) => (
            <Key letter={letter} key={letterIdx} handleInput={handleInput} />
          ))}
        {delKey && <Key letter="DEL" handleInput={handleDelete} />}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <KeyRow indexStart={0} indexEnd={10} />
      <KeyRow indexStart={10} indexEnd={19} />
      <KeyRow indexStart={19} indexEnd={AVAILABLE_LETTERS.length} delKey />
    </div>
  );
};

export default KeyMatrix;
