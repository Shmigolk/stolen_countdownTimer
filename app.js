const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4')
const deadline = document.querySelector('.deadline')

/*let futureDay = new Date(2022, 4, 9, 12, 30);*/
const TargetYear = new Date().getFullYear();
const TargetMonth = new Date().getMonth();
const TargetDay = new Date().getDate() + 10;

let futureDay = new Date(TargetYear, TargetMonth, TargetDay);

const year = futureDay.getFullYear();
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();

let month = futureDay.getMonth();
month = months[month]
const date = futureDay.getDate();
const day = weekdays[futureDay.getDay()];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} at ${hours}:${minutes}`;

// future time in milliseconds
const futureTime = futureDay.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const DaysLeft = Math.floor(t / oneDay );
  const hoursLeft = Math.floor((t - DaysLeft * oneDay) / oneHour);
  const minutesLeft = Math.floor((t - hoursLeft * oneHour - DaysLeft * oneDay) / oneMinute);
  const secondsLeft = Math.floor(t % oneMinute / 1000);
  //set value array
  let remainTime = [DaysLeft, hoursLeft, minutesLeft, secondsLeft];
  function format(item){
    if (item < 10) return item = `0${item}`;
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(remainTime[index]);
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway is expired </h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();





