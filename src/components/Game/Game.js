import React from 'react';
import GuessInput from '../GuessInput';
import GuessTrack from '../GuessTrack';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  
  const [ guesses, setGuesses ] = React.useState([]);
  
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
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
} 

export default Game;
