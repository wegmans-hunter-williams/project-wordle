import React from 'react';

export default function GuessInput( { handleSubmit, canGuess }) {
    
    const [ guess, setGuess ] = React.useState('');
    

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => {
            e.preventDefault();
            if(canGuess){
                handleSubmit(guess);
            }
            setGuess('');
        }}>
            <label htmlFor="guess-input">
                { canGuess ?  'Enter guess:' : 'No guesses remaining.'}
            </label>
            <input 
                id="guess-input" 
                type="text"
                value={guess}
                minLength={5}
                maxLength={5}
                onChange={(e) => {
                    const formattedGuess = e.target.value.toUpperCase();
                    setGuess(formattedGuess);
                }}
                />
        </form>
    )
}