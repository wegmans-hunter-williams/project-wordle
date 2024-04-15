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
  
  const [ gameOver, setGameOver ] = React.useState(false);
  
  function handleSubmit(guess){
  
    if(guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    } 
    else {
      const nextGuesses = [
        ...guesses,
        guess
     ];
     setGuesses(nextGuesses);
     if(answer === guess) setGameOver(true);
    }
  
  }
  return (
    <>
      <GuessTrack answer={answer} guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} />
      {gameOver && <Banner won={guesses.length < NUM_OF_GUESSES_ALLOWED} answer={answer} numGuesses={guesses.length} />}
      
    </>
  );
} 

export default Game;
