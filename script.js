const days = document.getElementById("day_time");
const hours = document.getElementById("hours_time");
const mins = document.getElementById("min_time");
const seconds = document.getElementById("sec_time");

const newNiver = "4 fev 2023";

function countdown(){

    const newNiverDate = new Date(newNiver);
    const curretDate = new Date();

    const totalSeconds = (newNiverDate - curretDate)/1000;

    const days = Math.floor(totalSeconds / 3600 /24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const mins = Math.floor(totalSeconds / 60) %60;

    const seconds = Math.floor(totalSeconds) %60;

    days.innerHTML = days;
    hours.innerHTML = formatTime(hours) ;
    mins.innerHTML = formatTime(mins);
    seconds.innerHTML = formatTime(seconds);


}


function formatTime(time){
        return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);