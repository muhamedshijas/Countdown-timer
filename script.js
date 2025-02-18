const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minutesEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')

function getNewYearDate() {
  const currYear = new Date().getFullYear();
  return new Date(`01 Jan ${currYear + 1}`); // Get date for next year
}

function countdown() {
  let newYearDate = getNewYearDate();
  const currDate = new Date();

  // If current date is past the new year date, reset to the next year's date
  if (currDate >= newYearDate) {
    newYearDate = getNewYearDate(); // Update to next year's date
  }

  const totalSeconds = (newYearDate - currDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);

  daysEL.innerHTML = days;
  hoursEL.innerHTML = hours;
  minutesEL.innerHTML = minutes;
  secondsEL.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);
