
// for hide
function hideElementById(id){
    const getId = document.getElementById(id);
    getId.classList.add('hidden');
    
}

// for show
function  showElementById(id){
    const getId = document.getElementById(id);
    getId.classList.remove('hidden')
}

// get rendom alohabet
function getRandomAlphabet(){
    const genarateAlpha = 'abcdefghijklmnopqrstuvwxyz'
    const getAlpha = genarateAlpha.split('');
  
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    const alphabet = getAlpha[index]
    return alphabet;
}

// set backgrount color by id 
function setBgColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-[#FFA500]')
}