import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

export default function GuessTrack( { answer, guesses }) {
    

    const NUM_OF_GUESSES = guesses.length;
    const emptyRows = Array(NUM_OF_GUESSES_ALLOWED - NUM_OF_GUESSES);
    
    //Create array of guesses, fill with empty indexes for remaining guesses
    const grid = [
        ...guesses,
        ...emptyRows
    ];

    return (
        <div className="guess-results">
            {grid.map((guess, i) => (
                <Guess key={`guess-${i}`} answer={answer} guess={guess} />
            ))}
        </div>
    )
}