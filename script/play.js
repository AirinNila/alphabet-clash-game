function continueGame(){
    const getsAlphabet = getRandomAlphabet()
    const yourAlpha = document.getElementById('current-alphabet');
    yourAlpha.innerText = getsAlphabet;
    setBgColorById(getsAlphabet)
}

// play
function forPlay(){
    hideElementById('home')
    hideElementById('final-score')
    showElementById('play-ground')

    // reset value
    setElementValue('current-life', 5);
    setElementValue('current-score', 0)
    continueGame()
}

// for key down

// for key down

function haldlerKeyPress (event){
    const playerPressed = event.key;
    const playerKey = document.getElementById('current-alphabet');
    const getKey = playerKey.innerText;
    const expectedKey = getKey.toLowerCase();

    if( playerPressed === 'escape'){
        gameOver()
    }
    
    if(playerPressed === expectedKey){
        continueGame()
        removeBgColor(expectedKey)
        //update score
        // const showScore = document.getElementById('current-score');
        // const getScore = showScore.innerText;
        // const convertCurrentScore = parseInt(getScore);

        const currentScore = increseOrdecreseNumber('current-score')
        // new score
        const newScore = currentScore + 1;
        const setTheValue = setElementValue('current-score', newScore)

    }
    else{
        // const getCurrentLifeId = document.getElementById('current-life');
        // const getCurrentLife = getCurrentLifeId.innerText;
        // const convertCurrentLife = parseInt(getCurrentLife);

        const currentLife = increseOrdecreseNumber('current-life')

        const newLife = currentLife - 1 ;
        const updatedLife = setElementValue('current-life', newLife)

       if(newLife === 0){
            gameOver();
       }
    }
}

document.addEventListener('keyup', haldlerKeyPress)

// game over
function gameOver(){
    const hidePlayGround = hideElementById('play-ground')
    const showResult = showElementById ('final-score')
    const lastScore = increseOrdecreseNumber('current-score')
    setElementValue('show-result', lastScore)

    // remove bg
    const currentAlphabet = getAlpha('current-alphabet')
    removeBgColor(currentAlphabet)
}

// play again
// function playAgain(){
//     const hideresult = hideElementById('final-score');
//     const showResult = showElementById('play-ground')
// }

