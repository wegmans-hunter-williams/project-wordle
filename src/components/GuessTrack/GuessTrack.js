import React from 'react';

export default function GuessTrack( { guesses }) {
    
    /* 
        @todo refactor key
    */

    return (
        <div className="guess-results">
            {guesses.map(guess => (
                <p key={guess} className="guess">{guess}</p>
            ))}
        </div>
    )
}