let showLevel = document.querySelector(".level");
let startBtn = document.querySelector(".start");
let buttons = document.querySelectorAll(".button button");

let colors = ["red", "green", "blue", "pink"];

let gameSeq = [];
let userSeq = [];

start = false;
let level = 0;

startBtn.addEventListener("click", startGame);

function startGame() {
    if (start === false) {
        console.log("game started");
        start = true;
        levelUp();
    }
}

function levelUp() {
    userSeq=[];
    level++;
    showLevel.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 200);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        showLevel.innerText = `Game over! Press start key to restart`;
        
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

for (btn of buttons) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}