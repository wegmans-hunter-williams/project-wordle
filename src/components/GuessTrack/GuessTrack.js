import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

export default function GuessTrack( { guesses }) {
    
    /* 
        @todo refactor key
    */
        const NUM_OF_GUESSES = guesses.length;
        const emptyRows = Array(NUM_OF_GUESSES_ALLOWED - NUM_OF_GUESSES);
       
       const grid = [
        ...guesses,
        ...emptyRows
       ];

    return (
        <div className="guess-results">
            {grid.map((guess, i) => (
                <Guess key={`guess-${i}`} guess={guess} />
            ))}
        </div>
    )
}