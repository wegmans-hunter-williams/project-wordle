import React from 'react';
import { checkGuess } from '../../game-helpers.js';
export default function Guess( { guess, answer }) {

    /* 
        @todo refactor
    */

   function classFinder(letter, index){
        
        return `cell ${pattern[index].status}`;
   }


    function buildCells(word){
        const letters = word.split('');
        const pattern = checkGuess(guess, answer);
        return letters.map((letter, i) => <span key={i} className={`cell ${pattern[i].status}`}>{letter}</span>);
    }

    return (
        <p className="guess">
            {guess
            ? buildCells(guess)
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