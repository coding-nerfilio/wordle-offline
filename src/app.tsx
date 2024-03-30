import "@/styles/globals.css";
import { GAME_STATUS, State, useGame } from "./hooks/useGame";
import { useEffect } from "preact/hooks";
import { AVAILABLE_LETTERS } from "./constants";
import BlockMatrix from "@/components/BlockMatrix";
import KeyMatrix from "@/components/KeyMatrix";
import Header from "@/components/Header";
import Dialog from "./components/Dialog";
import useSwitch from "./hooks/useSwitch";

const WinDialog = ({
  sw,
  resetGame,
}: {
  sw: ReturnType<typeof useSwitch>;
  resetGame: () => any;
}) => {
  return (
    <Dialog
      active={sw.isOn}
      title="You win!"
      content={<div>Congrats! 🙌👏</div>}
      onClose={() => {
        sw.toggle();
        resetGame();
      }}
    />
  );
};

const LoseDialog = ({
  sw,
  state,
  resetGame,
}: {
  sw: ReturnType<typeof useSwitch>;
  state: State;
  resetGame: () => any;
}) => {
  return (
    <Dialog
      active={sw.isOn}
      title="You lose!"
      content={<div>The word was {state.word}</div>}
      onClose={() => {
        sw.toggle();
        resetGame();
      }}
    />
  );
};

export function App() {
  const game = useGame();
  const winDialogSwitch = useSwitch();
  const loseDialogSwitch = useSwitch();

  const handleInput = (letter: string) => {
    if (game.state.gameStatus === GAME_STATUS.PLAYING) {
      if (AVAILABLE_LETTERS.includes(letter)) game.handleLetter(letter);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", (ev) => handleInput(ev.key.toUpperCase()));

    return () => {
      window.removeEventListener("keyup", (ev) =>
        handleInput(ev.key.toUpperCase())
      );
    };
  }, []);

  useEffect(() => {
    if (game.state.gameStatus === GAME_STATUS.WIN) winDialogSwitch.toggle();
    if (game.state.gameStatus === GAME_STATUS.LOSE) loseDialogSwitch.toggle();
  }, [game.state.gameStatus]);

  return (
    <>
      <Header />
      <div className="my-5">
        <BlockMatrix state={game.state} />
      </div>
      <KeyMatrix handleInput={handleInput} handleDelete={game.handleDelete} />
      <WinDialog sw={winDialogSwitch} resetGame={game.resetGame} />
      <LoseDialog
        sw={loseDialogSwitch}
        resetGame={game.resetGame}
        state={game.state}
      />
    </>
  );
}
