$(document).ready(function (){
  // if (document.querySelectorAll(".hamburger")) {
  //   let hamburgers = document.querySelectorAll(".hamburger");
  //   let header = document.querySelector(".left-bar");
  //   let curtain = document.querySelector(".black-curtain");
  //   let rightSide = document.querySelector(".header-new .right-side");
  //   hamburgers.forEach((hamburger) => {
  //     hamburger.addEventListener("click", function () {
  //       hamburger.classList.toggle("is-active");
  //       if (header) {
  //         header.classList.toggle("active");
  //       } else rightSide.classList.toggle("active");
  //
  //       if (curtain.classList.contains("active")) {
  //         curtain.classList.remove("show");
  //         setTimeout(() => {
  //           curtain.classList.remove("active");
  //         }, 400);
  //       } else {
  //         curtain.classList.add("active");
  //         setTimeout(() => {
  //           curtain.classList.add("show");
  //         }, 200);
  //       }
  //     });
  //
  //     curtain.addEventListener("click", () => {
  //       hamburger.classList.toggle("is-active");
  //       if (header) {
  //         header.classList.toggle("active");
  //       } else rightSide.classList.toggle("active");
  //       curtain.classList.remove("show");
  //       setTimeout(() => {
  //         curtain.classList.remove("active");
  //       }, 400);
  //     });
  //   });
  // }
})

let errorId = document.getElementById("inputError");

document.getElementById("answer").onkeypress = function (event) {
    if (event.keyCode > 47 && event.keyCode < 58 || event.keyCode == 13) {
        console.log("togri");
    }
    else {
        errorId.classList.add("loss");
        setTimeout(function() {
            errorId.classList.remove("loss");
        }, 1000);
        return false;
    }
}

let level = 1;
document.getElementById("level").innerHTML = 'level ' + level;

let randomNum1 = Math.floor(Math.random() * 90 + 10);
let randomNum2 = Math.floor(Math.random() * 90 + 10);
let result = randomNum1 + randomNum2;
console.log(result);

document.getElementById("joining1").value = randomNum1;
document.getElementById("joining2").value = randomNum2;

let correct = 0;
let incorrect = 0;

let timer = 10;
function myTimer() {
    document.getElementById("timer").innerHTML = timer;
    timer--;
    if (timer < 0) {
        gameOver();
    }
}
let timeId =  setInterval(myTimer, 1000);

// let totalTime = 60;
// function totalTimer() {
//     document.getElementById("totalTime").innerHTML = totalTime;
//     totalTime--;
//     if (totalTime < 0) {
//         stopperTime(totalTimeId);
//         gameOver();
//     }
// }
// let totalTimeId =  setInterval(totalTimer, 1000);

function stopperTime(item) {
    clearInterval(item);
}

function getResult() {

    let answer = document.getElementById("answer").value;

    answer == result ? correct++ : incorrect++;
    // timer/totalTime надо менять при изменение правил!
    answer == result ? (timer = 10) : gameOver();

    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;
    level++;
    document.getElementById("level").innerHTML = 'Level ' + level;

    let randomNum3 = Math.floor(Math.random() * 90 + 10);
    let randomNum4 = Math.floor(Math.random() * 90 + 10);
    result = randomNum3 + randomNum4;

    document.getElementById("joining1").value = randomNum3;
    document.getElementById("joining2").value = randomNum4;
    document.getElementById("answer").value = "";

    console.log(result);
}

let section = document.getElementById("section");

function gameOver() {
    section.classList.add("hide-block");
    stopperTime(timeId);    // надо менять при изменение правил!
    document.onkeypress = function (event) {
        if (event.keyCode == 32) {
            refreshGame();
        }
    }
}

function refreshGame() {
    section.classList.remove("hide-block");
    level = 1;
    correct = 0;
    incorrect = 0;
    document.getElementById("level").innerHTML = 'level ' + level;
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;
    refreshTime();
}

function refreshTime() {
    timer = 10;
    myTimer();
    timeId = setInterval(myTimer, 1000);
}