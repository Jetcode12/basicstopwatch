const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");


let startTime = 0;
let elapsedTime = 0;
let currenTime = 0;
let paused = true;
let intervalID;
let hours = 0;
let mins = 0;
let sec = 0;

startButton.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 75);
    }
});

pauseButton.addEventListener("click", () => {
    if(!paused){
        paused: true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});

resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    elapsedTime = 0;
    startTime = 0;
    currenTime = 0;
    hours = 0;
    mins = 0;
    sec = 0;
    timeDisplay.textContent = "00:00:00"
});



function updateTime(){
    elapsedTime = Date.now() - startTime;

    sec = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    sec = pad(sec);
    mins = pad(mins);
    hours = pad(hours);

    timeDisplay.textContent = `${hours}:${mins}:${sec}`;


    function pad(unit){
        return(("0") + unit).length > 2 ? unit: "0" + unit
    }
};