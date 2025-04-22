function continueGame(){
    const getsAlphabet = getRandomAlphabet()
    const yourAlpha = document.getElementById('current-alphabet');
    yourAlpha.innerText = getsAlphabet;
    setBgColorById(getsAlphabet)
}

// play
function forPlay(){
    const playNow = hideElementById('home')
    const nextStep =showElementById('play-ground')
    continueGame()
}

