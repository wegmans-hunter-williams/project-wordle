import React from 'react';

export default function Banner( { guesses, answer, canGuess } ) {

    const won = guesses.includes(answer);
    
    const happyBanner = (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in {' '} <strong>{guesses.length} guesses</strong>.
            </p>
        </div>
    )

    const sadBanner = (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )

    return (
        <>
        {won && happyBanner}
        {!canGuess && !won && sadBanner}
        </>
    )
    
}

