import React from 'react';

export default function Guess( { guess }) {

    /* 
        @todo refactor
    */

    function buildWord(word){
        const letters = word.split('');
        return letters.map((letter, i) => <span key={i} className="cell">{letter}</span>);
    }

    return (
        <p className="guess">
            {guess
            ? buildWord(guess)
            : (
                <>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                </>
            )
            }
        </p>
    )
}