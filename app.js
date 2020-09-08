//setInterval(currentDate, 1000);

function currentDate() {
  var birthDay = document.getElementById("myText").value;
  var array1 = [];
  var x = array1.push(birthDay);
  var y = array1.toString();
  //console.log(array1);

  var mSecondsBetweenDOBAnd1970 = Date.parse(y);
  var mSecondsBetweenNowAnd1970 = Date.now();
  var ageMiliSeconds = mSecondsBetweenNowAnd1970 - mSecondsBetweenDOBAnd1970;
  //console.log(mSecondsBetweenDOBAnd1970);
  //console.log(x);
  //console.log("age in miliseconds " + ageMiliSeconds);
  var seconds = ageMiliSeconds / 1000;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;

  // console.log("days " + days);
  var wholeNumberDays = Math.floor(days);
  var hoursRemainder = days - wholeNumberDays;
  var numberHours = hoursRemainder * 24;
  var wholeNumberHours = Math.floor(numberHours);
  var minutesRemainder = numberHours - wholeNumberHours;
  var numberMinutes = minutesRemainder * 60;
  //console.log("number of minutes " + numberMinutes);
  var wholeNumberMinutes = Math.floor(numberMinutes);
  var secondsRemainder = numberMinutes - wholeNumberMinutes;
  var numberSeconds = secondsRemainder * 60;
  var wholeNumberSeconds = Math.floor(numberSeconds);
  //console.log(wholeNumberSeconds);
  //console.log("hours " + wholeNumberHours);
  //console.log("hours remainder " + hoursRemainder);
  //console.log("minutes remainder " + minutesRemainder);
  document.querySelector(".days").innerHTML = wholeNumberDays;
  document.querySelector(".hours").innerHTML = wholeNumberHours;
  document.querySelector(".minutes").innerHTML = wholeNumberMinutes;
  document.querySelector(".seconds").innerHTML = wholeNumberSeconds;
}

document.getElementById("button").addEventListener("click", currentDate);
