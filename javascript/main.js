/* function renderTime() {
  var mydate = new Date();
  var year = mydate.getFullYear();
  if (year < 1000) {
    year += 1900;
  }

  var day = mydate.getDay();
  var month = mydate.getMonth();
  var day = mydate.getDate();
  var dayarray = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var montharray = new Array(
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
    "December"
  );
  // Date End

  // Time
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  if (h == 24) {
    h = 0;
  } else if (h > 12) {
    h = h - 0;
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  var myClock = document.getElementById("ClockDisplay");
  myClock.textContent =
    "" +
    dayarray[day] +
    " " +
    day +
    " " +
    montharray[month] +
    " " +
    year +
    " | " +
    h +
    ":" +
    m +
    ":" +
    s;
  myClock.innerText =
    "" +
    dayarray[day] +
    " " +
    day +
    " " +
    montharray[month] +
    " " +
    year +
    " | " +
    h +
    ":" +
    m +
    ":" +
    s;

  setTimeout("renderTime()", 1000);
}
renderTime(); */

var d = new Date();

var day = d.getDay();
var hour = d.getHours();

if (day >= 1 && day <= 5 && hour >= 10 && hour <= 18) {
  document
    .getElementById("openclose")
    .insertAdjacentHTML("beforeend", "geopend");
} else if (day >= 6 && day <= 7 && hour >= 10 && hour <= 18) {
  document
    .getElementById("openclose")
    .insertAdjacentHTML("beforeend", "geopend");
} else {
  document
    .getElementById("openclose")
    .insertAdjacentHTML("beforeend", "gesloten");
}

var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

var timehour = d.getHours() + ":00";

document.getElementById("LiveClock").insertAdjacentHTML("beforeend", time);

function changeClosingTime() {
  document.getElementById("closingTime").innerHTML = timehour;
}
