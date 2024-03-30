import { GUESS_LETTER_RESULT, Guess } from "./hooks/useGame";

const removeLetterIfExists = (letter: string, word: Array<string>) => {
  const indexToRemove = word.indexOf(letter);
  if (indexToRemove > -1) {
    return [...word.slice(0, indexToRemove), ...word.slice(indexToRemove + 1)];
  }
  return word;
};

export const evaluateGuess = (guess: Guess, word: string) => {
  /*Generate results array, already evaluates position.
      Letters that are not CORRECT will be consided as BAD_POSITION
    */
  let results: Guess = guess.map(
    (letterGuess, idx) =>
      ({
        status:
          letterGuess.letter === word[idx]
            ? GUESS_LETTER_RESULT.CORRECT
            : GUESS_LETTER_RESULT.BAD_POSITION,
        letter: letterGuess.letter,
      } as any)
  );

  //Generate a temp variable to hold unguessed letters
  let word_tmp = [...word];

  for (let i = 0; i < results.length; i++) {
    if (results[i].status === GUESS_LETTER_RESULT.CORRECT) {
      word_tmp = removeLetterIfExists(results[i].letter!, word_tmp);
    }
  }

  //Confirm BAD_POSITION guess
  for (let i = 0; i < results.length; i++) {
    if (results[i].status === GUESS_LETTER_RESULT.BAD_POSITION) {
      const lettersQuantity = word_tmp.length;
      word_tmp = removeLetterIfExists(results[i].letter!, word_tmp);
      if (lettersQuantity === word_tmp.length)
        results[i].status = GUESS_LETTER_RESULT.UNUSED;
    }
  }

  return results;
};
