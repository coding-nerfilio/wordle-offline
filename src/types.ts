export enum GUESS_RESULT {
  CORRECT,
  BAD_POSITION,
  UNUSED,
}

export type Guess = {
  letter: undefined | string;
  status: GUESS_RESULT;
};

export type State = {
  word: string;
  guesses: Array<Array<Guess>>;
};
