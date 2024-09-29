function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('random alphabet', expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        removeBackgroundColorById(expectedAlphabet);
        console.log('..................................');
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        console.log('..................................');
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}