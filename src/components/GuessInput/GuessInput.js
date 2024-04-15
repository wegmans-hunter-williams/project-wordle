import React from 'react';

export default function GuessInput( { handleSubmit }) {
    
    const [ guess, setGuess ] = React.useState('');
    
    /* 
        @todo refactor minLength validation
    */
    return (
        <form className="guess-input-wrapper" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(guess);
            setGuess('');
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
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