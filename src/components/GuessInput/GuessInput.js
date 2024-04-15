import React from 'react';

export default function GuessInput() {
    
    const [ guess, setGuess ] = React.useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        console.log({
            guess
        });
    }
    
    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text"
                value={guess}
                maxLength={5}
                onChange={(e) => {
                    const formattedGuess = e.target.value.toUpperCase();
                    setGuess(formattedGuess);
                }}
                />
        </form>
    )
}