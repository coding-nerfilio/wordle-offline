import { useState } from "preact/hooks";
import {
  AVAILABLE_WORDS,
  GUESS_TOTAL_AMOUNT,
  LETTERS_TOTAL_AMOUNT,
} from "../constants";
import { evaluateGuess } from "../logic";

export enum GAME_STATUS {
  PLAYING,
  WIN,
  LOSE,
}

export enum GUESS_LETTER_RESULT {
  CORRECT,
  BAD_POSITION,
  UNUSED,
  UNDEFINED,
}

export type GuessLetter = {
  letter: undefined | string;
  status: GUESS_LETTER_RESULT;
};

export type Guess = Array<GuessLetter>;

export type State = {
  word: string;
  guessIndex: number;
  guessLetterIndex: number;
  guesses: Array<Guess>;
  gameStatus: GAME_STATUS;
};

const generateDefaultState = (): State => ({
  gameStatus: GAME_STATUS.PLAYING,
  word: AVAILABLE_WORDS[Math.floor(Math.random() * 499)].toUpperCase(),
  guessIndex: 0,
  guessLetterIndex: 0,
  guesses: new Array(GUESS_TOTAL_AMOUNT).fill(
    new Array(LETTERS_TOTAL_AMOUNT).fill({
      status: GUESS_LETTER_RESULT.UNDEFINED,
      letter: "",
    })
  ),
});

export const useGame = () => {
  const [state, setState] = useState(generateDefaultState());

  const resetGame = () => {
    setState(generateDefaultState());
  };

  const handleLetter = (letter: string) => {
    setState((prevState) => {
      // Create a copy of the previous state
      let nextState = { ...prevState };

      // Update guesses array with the new letter
      nextState.guesses = nextState.guesses.map((arrGuess, arrGuessIdx) => {
        if (arrGuessIdx === prevState.guessIndex) {
          return arrGuess.map((guess, guessIdx) => {
            if (guessIdx === prevState.guessLetterIndex) {
              return { ...guess, letter: letter };
            }
            return guess;
          });
        }
        return arrGuess;
      });

      // Increment guessLetterIndex if it's within bounds
      if (nextState.guessLetterIndex < LETTERS_TOTAL_AMOUNT - 1) {
        nextState.guessLetterIndex += 1;
      } else {
        const evaluatedGuess = evaluateGuess(
          nextState.guesses[nextState.guessIndex],
          nextState.word
        );

        nextState.guesses[nextState.guessIndex] = evaluatedGuess;

        //win?
        if (
          evaluatedGuess.find(
            (guess) => guess.status !== GUESS_LETTER_RESULT.CORRECT
          ) === undefined
        ) {
          nextState.gameStatus = GAME_STATUS.WIN;
        } else if (state.guessIndex === GUESS_TOTAL_AMOUNT - 1) {
          nextState.gameStatus = GAME_STATUS.LOSE;
        } else {
          nextState.guessLetterIndex = 0;
          nextState.guessIndex++;
        }
      }
      return nextState; // Return the updated state
    });
  };

  const handleDelete = () => {
    setState((prevState) => {
      let nextState = { ...prevState };

      nextState.guesses[nextState.guessIndex][
        nextState.guessLetterIndex
      ].letter = "";

      if (nextState.guessLetterIndex > 0) {
        nextState.guessLetterIndex--;
      }

      return nextState;
    });
  };

  return { state, handleLetter, handleDelete, resetGame };
};
