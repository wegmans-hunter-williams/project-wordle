import React from 'react';

export default function GuessInput() {
    
    const [ guess, setGuess ] = React.useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        
        setGuess(guess);
        console.log({
            guess
        });
        
    }
    /* 
        @todo refactor minLength validation
    */
    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
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