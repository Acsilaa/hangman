let dotHang = document.getElementsByClassName("hang");
let lives = dotHang.length;
let guessedLetters = 0;
for(let i = 0; i < dotHang.length; i++){
    dotHang[i].style.opacity = 0;
}
let buttonsDiv = document.getElementById("rightw");
let statusDiv = document.getElementById("statusw");
let actualWord;
actualWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
let actualWordArr = actualWord.split("");
for(let i = 0; i < actualWordArr.length; i++){
    let sLetter = `<span class="s${actualWordArr[i]}">_</span>`;
    statusDiv.innerHTML += sLetter;
}
let dictionary = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
function TryLetter(letter){
    let didGuessRight = false;
    let bannedIndexes = [];
    for(let i = 0; i < actualWordArr.length; i++){
        if(actualWordArr[i] != letter.toLowerCase()) continue;
        didGuessRight = true;
        let classN = "s" + letter.toLowerCase();
        let fields = document.getElementsByClassName(classN);
        for(let j = 0; j < fields.length; j++){
            fields[j].innerHTML = letter;
            if(bannedIndexes[j] != j) guessedLetters++;
            bannedIndexes += [j];
        }
        if(guessedLetters == actualWordArr.length) return Victory();
    }
    bannedIndexes = [];
    if(didGuessRight) return;
    lives--;
    let partsToDraw = dotHang.length - lives;
    for(let i = 0; i < partsToDraw; i++){
        dotHang[i].style.opacity = 1;
    }
    if(lives == 0) return Hanged();
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
function Hanged(){
    let leftw = document.getElementById("leftw");
    leftw.style.background = "red";
    document.getElementById("head").style.background = "red";
    let btns = document.getElementsByClassName("letterbtn");
    let spans = document.getElementsByTagName("span");
    for(let i = 0; i < spans.length; i++){
        spans[i].innerHTML = actualWordArr[i].toUpperCase();
    }
    for(let i = 0; i < btns.length; i++){
        btns[i].innerHTML = "restart";
        btns[i].disabled = true;
        btns[i].onclick = RestartGame;
        setTimeout(function(){
            btns[i].disabled = false;
        }, 900);
    }
}
function RestartGame(){
    location.reload();
}
function Victory(){
    let btns = document.getElementsByClassName("letterbtn");
    for(let i = 0; i < btns.length; i++){
        btns[i].innerHTML = "WON";
        btns[i].disabled = true;
        btns[i].onclick = RestartGame;
        setTimeout(function(){
            btns[i].disabled = false;
        }, 900);
    }
}