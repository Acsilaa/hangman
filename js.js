let buttonsDiv = document.getElementById("rightw");
let statusDiv = document.getElementById("statusw");
let actualWord;
let possibleWords = [
    "mother",
    "father",
    "apple",
    "milk",
    "orange",
    "motherducker",
    "sister",
]
actualWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
let actualWordArr = actualWord.split("");
console.log(actualWord);

for(let i = 0; i < actualWordArr.length; i++){
    let sLetter = `<span class="s${actualWordArr[i]}">_</span>`;
    statusDiv.innerHTML += sLetter;
}

let dictionary = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

function TryLetter(letter){
    for(let i = 0; i < actualWordArr.length; i++){
        if(actualWordArr[i] != letter.toLowerCase()) continue;
        let classN = "s" + letter.toLowerCase();
        let fields = document.getElementsByClassName(classN);
        for(let i = 0; i < fields.length; i++){
            fields[i].innerHTML = letter;
        }
    }
}

function RegisterLetter(button){
    button.disabled = true;
    TryLetter(button.innerHTML);
}

for( let i = 0; i < dictionary.length; i++ ){
    let crrnt = dictionary[i];
    let letterButton = `<button id="${crrnt}" onclick="RegisterLetter(this)" class="letterbtn">${crrnt}</button>`;
    buttonsDiv.innerHTML += letterButton;
}
