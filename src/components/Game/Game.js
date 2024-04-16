import React from 'react';
import GuessInput from '../GuessInput';
import GuessTrack from '../GuessTrack';
import Banner from '../Banner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [ guesses, setGuesses ] = React.useState([]);
  const canGuess = guesses.length < NUM_OF_GUESSES_ALLOWED;

  function handleSubmit(guess){

      const nextGuesses = [
        ...guesses,
        guess
     ];
     setGuesses(nextGuesses);
     
  }

  return (
    <>
      <GuessTrack answer={answer} guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} canGuess={canGuess} />
      <Banner guesses={guesses} answer={answer} canGuess={canGuess}/>
    </>
  );
} 

export default Game;
