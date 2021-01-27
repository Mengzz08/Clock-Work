

setInterval(clockWork,500);

function clockWork(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if(hours > 12){
    hours -= 12;
}else if(hours == 0){
    hours = 12;
}

if(hours < 10){
   hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}





document.getElementById('hour').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
}


