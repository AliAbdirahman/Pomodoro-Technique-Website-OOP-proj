let BtnEle1 = document.querySelector(".studybtn");//study button
let StopEle1 = document.querySelector(".stopbtn");//stop button
let morebtn1 = document.querySelector(".learnmore1");//learnmore button
let lessbtn1 = document.querySelector(".learnless1");//learnless button
let morebtn2 = document.querySelector(".learnmore2");//learnmore button
let lessbtn2 = document.querySelector(".learnless2");//learnless button
const startingMinutes = 25;//defining the time in the functions; more specifically the study time
let time = startingMinutes * 60;
const startingMinutes2 = 5;//defining the time in the functions; more specifically the short break
let time2 = startingMinutes2 * 60;
const startingMinutes3 = 15;//defining the time in the functions; more specifically the long break
let time3 = startingMinutes3 * 60;
const countdownEl1 = document.getElementById('countdown1');//variable where the clock appears
const intervalCount = document.getElementById('intervalcount');//variable that shows the number of intervals
let interval= null;
let interval2= null;
let interval3= null;
let intervalCounter= 0;
BtnEle1.addEventListener("click", () => {//defining what clicking the study button does which is to call the study function through the interval variable
    clearInterval(interval);//stopping the other functions
    clearInterval(interval2);
    clearInterval(interval3);
    interval= setInterval(studyCountdown, 1000);

});
StopEle1.addEventListener("click", () => {//defining what clicking the stop button does which is to stop all the functions and print "paused"
    clearInterval(interval);//stopping the other functions
    clearInterval(interval2);
    clearInterval(interval3);
    countdownEl1.innerHTML = "Paused";//printing paused
});
morebtn1.addEventListener("click", () => {//defining what clicking the learn more button does which is to show the info
    document.getElementById("info").style.display = "block";
});
lessbtn1.addEventListener("click", () => {//defining what clicking the learn less button does which is to hide the info
    document.getElementById("info").style.display = "none";
});
morebtn2.addEventListener("click", () => {//defining what clicking the learn more button does which is to show the info
    document.getElementById("info2").style.display = "block";
});
lessbtn2.addEventListener("click", () => {//defining what clicking the learn less button does which is to hide the info
    document.getElementById("info2").style.display = "none";
});
function studyCountdown(){//defining the study function
    const minutes = Math.floor(time / 60);//defining the minutes
    let seconds = time % 60;//defining the seconds
    seconds = seconds < 10 ? '0' + seconds : seconds;//putting a zero infront of the number when second are less than 9
    countdownEl1.innerHTML = minutes + ": " + seconds;//printing the minutes and second into the html file
    time--;// reducing the time by 1 second
    if(time<= 0){//defining what happens if time reaches zero
        intervalCounter++;//increase the interval by one
        intervalCount.innerHTML= "Interval Number= " + intervalCounter//print the interval number
        if(intervalCounter%4==0){//if interval is equal to divisible of 4, to trigger the long break function
            clearInterval(interval);//stop the other two functions
            clearInterval(interval2);
            time= startingMinutes * 60;//reseting the study countdown
            interval3= setInterval(longbreakCountdown, 1000);//trigerring the long break count down
        }
        else{//after every other study session
            clearInterval(interval);//stop the other two functions
            clearInterval(interval3);
            time3= startingMinutes3 * 60;//reseting the long break countdown
            time= startingMinutes * 60;//reseting the study countdown
            interval2= setInterval(breakCountdown, 1000);//starting the short break countdown
        }
    }
}

function breakCountdown(){//the break countdown function is the same as the  study function except for the time variable which changes to 5 min instead of 25
    const minutes2 = Math.floor(time2 / 60);
    let seconds2 = time2 % 60;
    seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
    countdownEl1.innerHTML = minutes2 + ": " + seconds2;
    time2--;
    if(time2<= 0){//if break countdown is zero trigger study function and stop the other two countdowns
        clearInterval(interval2);
        clearInterval(interval3);
        time2= startingMinutes2 * 60;
        interval= setInterval(studyCountdown, 1000);
    }
}
function longbreakCountdown(){//similiarly, the long break countdown function is the same as the  study function except for the time variable which changes to 15 min instead of 25 min.
    const minutes3 = Math.floor(time3 / 60);
    let seconds3 = time3 % 60;
    seconds3 = seconds3 < 10 ? '0' + seconds3 : seconds3;
    countdownEl1.innerHTML = minutes3 + ": " + seconds3;
    time3--;
    if(time3<= 0){//if long break countdown is zero trigger study function and stop the other two countdowns
        clearInterval(interval2);
        clearInterval(interval3);
        interval= setInterval(studyCountdown, 1000);
    }
}
