let BtnEle1 = document.querySelector(".studybtn");
let StopEle1 = document.querySelector(".stopbtn");
let BtnEle2 = document.querySelector(".breakbtn");
let BtnEle3 = document.querySelector(".longbreakbtn");
let morebtn1 = document.querySelector(".learnmore1");
let lessbtn1 = document.querySelector(".learnless1");
let morebtn2 = document.querySelector(".learnmore2");
let lessbtn2 = document.querySelector(".learnless2");
const startingMinutes = 25;
let time = startingMinutes * 60;
const startingMinutes2 = 5;
let time2 = startingMinutes2 * 60;
const startingMinutes3 = 15;
let time3 = startingMinutes3 * 60;
const countdownEl1 = document.getElementById('countdown1');
const intervalCount = document.getElementById('intervalcount');
let interval= null;
let interval2= null;
let interval3= null;
let intervalCounter= 0;
BtnEle1.addEventListener("click", () => {
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    interval= setInterval(studyCountdown, 1000);

});
StopEle1.addEventListener("click", () => {
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    countdownEl1.innerHTML = "Pause";
});
morebtn1.addEventListener("click", () => {
    document.getElementById("info").style.display = "block";
});
lessbtn1.addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
});
morebtn2.addEventListener("click", () => {
    document.getElementById("info2").style.display = "block";
});
lessbtn2.addEventListener("click", () => {
    document.getElementById("info2").style.display = "none";
});
function studyCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl1.innerHTML = minutes + ": " + seconds;
    time--;
    if(time<= 0){
        intervalCounter++;
        intervalCount.innerHTML= "Interval Number= " + intervalCounter
        if(intervalCounter%4==0){
            clearInterval(interval);
            clearInterval(interval2);
            time= startingMinutes * 60;
            interval3= setInterval(longbreakCountdown, 1000);
        }
        else{
            clearInterval(interval);
            clearInterval(interval3);
            time3= startingMinutes3 * 60;
            time= startingMinutes * 60;
            interval2= setInterval(breakCountdown, 1000);
        }
    }
}

function breakCountdown(){
    const minutes2 = Math.floor(time2 / 60);
    let seconds2 = time2 % 60;
    seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
    countdownEl1.innerHTML = minutes2 + ": " + seconds2;
    time2--;
    if(time2<= 0){
        clearInterval(interval2);
        clearInterval(interval3);
        time2= startingMinutes2 * 60;
        interval= setInterval(studyCountdown, 1000);
    }
}
function longbreakCountdown(){
    const minutes3 = Math.floor(time3 / 60);
    let seconds3 = time3 % 60;
    seconds3 = seconds3 < 10 ? '0' + seconds3 : seconds3;
    countdownEl1.innerHTML = minutes3 + ": " + seconds3;
    time3--;
    if(time3<= 0){
        clearInterval(interval2);
        clearInterval(interval3);
        interval= setInterval(studyCountdown, 1000);
    }
}