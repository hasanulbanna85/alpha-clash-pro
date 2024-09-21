function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}