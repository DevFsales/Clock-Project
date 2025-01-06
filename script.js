const hoursElements = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");

function newtime () {
const date = new Date();

const hours = date.getHours()
const minut = date.getMinutes()
const second = date.getSeconds()

hoursElements.textContent = fixTime(hours)
minutesElement.textContent = fixTime(minut)
secElement.textContent= fixTime(second)
}

function fixTime (time) {
   return time < 10 ? '0'+time : time   
}

newtime()
setInterval(newtime, 1000)