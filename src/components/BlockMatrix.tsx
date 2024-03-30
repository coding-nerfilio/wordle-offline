import { State } from "@/hooks/useGame";
import Block from "@/components/Block";
import "@/styles/globals.css";

const BlockMatrix = ({ state }: { state: State }) => {
  return (
    <div className={"w-100 h-100 flex flex-col items-center content-center "}>
      {state.guesses.map((guessesArray, guessesArrayIdx) => (
        <div key={guessesArrayIdx} className={"flex flex-row"}>
          {guessesArray.map((guess, guessIdx) => (
            <>
              <Block
                guess={guess}
                state={{
                  selected:
                    guessesArrayIdx === state.guessIndex &&
                    guessIdx === state.guessLetterIndex,
                }}
                key={guessIdx}
              />
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlockMatrix;
