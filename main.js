let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")



let chance = "X"

function chanceChance() {
    if (chance == "X") {
        chance = "O"
    }
    else {
        chance = "X"
    }
}

function Reload() {
    location.reload();
}
function checkWin() {
    if (btn1.innerText == btn2.innerText &&
        btn1.innerText == btn3.innerText &&
        btn1.innerText != "" ||
        btn4.innerText == btn5.innerText &&
        btn5.innerText == btn6.innerText &&
        btn4.innerText != "" ||
        btn7.innerText == btn8.innerText &&
        btn7.innerText == btn9.innerText &&
        btn7.innerText != "" ||
        btn3.innerText == btn5.innerText &&
        btn3.innerText == btn7.innerText &&
        btn3.innerText != "" ||
        btn1.innerText == btn5.innerText &&
        btn1.innerText == btn9.innerText &&
        btn1.innerText != "" ||
        btn1.innerText == btn4.innerText &&
        btn1.innerText == btn7.innerText &&
        btn1.innerText != "" ||
        btn2.innerText == btn5.innerText &&
        btn2.innerText == btn8.innerText &&
        btn2.innerText != "" ||
        btn3.innerText == btn6.innerText &&
        btn3.innerText == btn9.innerText &&
        btn3.innerText != ""
    ) {
        if (chance == "X") {
            alert("X-WIN")
        }
        else {
            alert("O-WIN")
        }
    }
};

btn1.onclick = function () {
    btn1.innerText = chance
    checkWin();
    chanceChance();
    btn1.style.fontWeight = "900"
    btn1.style.fontSize = "1.5rem"
}

btn2.onclick = function () {
    btn2.innerText = chance
    checkWin();
    chanceChance();
    btn2.style.fontWeight = "900"
    btn2.style.fontSize = "1.5rem"
}

btn3.onclick = function () {
    btn3.innerText = chance
    checkWin();
    chanceChance();
    btn3.style.fontWeight = "900"
    btn3.style.fontSize = "1.5rem"
}

btn4.onclick = function () {
    btn4.innerText = chance
    checkWin();
    chanceChance();
    btn4.style.fontWeight = "900"
    btn4.style.fontSize = "1.5rem"
}

btn5.onclick = function () {
    btn5.innerText = chance
    checkWin();
    chanceChance();
    btn5.style.fontWeight = "900"
    btn5.style.fontSize = "1.5rem"
}

btn6.onclick = function () {
    btn6.innerText = chance
    checkWin();
    chanceChance();
    btn6.style.fontWeight = "900"
    btn6.style.fontSize = "1.5rem"
}

btn7.onclick = function () {
    btn7.innerText = chance
    checkWin();
    chanceChance();
    btn7.style.fontWeight = "900"
    btn7.style.fontSize = "1.5rem"
}

btn8.onclick = function () {
    btn8.innerText = chance
    checkWin();
    chanceChance();
    btn8.style.fontWeight = "900"
    btn8.style.fontSize = "1.5rem"
}

btn9.onclick = function () {
    btn9.innerText = chance
    checkWin();
    chanceChance();
    btn9.style.fontWeight = "900"
    btn9.style.fontSize = "1.5rem"
}