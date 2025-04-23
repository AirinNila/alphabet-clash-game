
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

// remove background by id

function removeBgColor(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-[#FFA500]')
}

// for convert to number 

function increseOrdecreseNumber (id){
    const getId = document.getElementById(id);
    const value = getId.innerText;
    const convert = parseInt(value);
    return convert;
}

// set element value 

function setElementValue (element, value){
    const getElement = document.getElementById(element);
    getElement.innerText = value;
}

// for get alphabet
function getAlpha(id){
    const element = document.getElementById(id);
    const text = element.innerText;
    return text;
}
