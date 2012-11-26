window.onload = function() {
  var today = new Date();
  var year = today.getFullYear();

  if (today.getMonth() == 11 && today.getDate() > 25) {   // Between Christmas and January
    year += 1;                                            // countdown to next Christmas
  }

  if (today.getMonth() == 11 && today.getDate() == 25) {  // Christmas Day
    document.getElementById('message').textContent = "Merry Christmas";

  } else {
    var christmas = new Date(year, 11, 25);   // JavaScript months are 0-11
    var oneDay = 1000 * 60 * 60 * 24;   // One day in milliseconds
    var timeLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

    if (timeLeft == 1) {    // Pet peeve: "1 Days til..." This gets rid of the plural
      document.getElementById('message').removeChild(document.getElementById('plural'));
    }

    document.getElementById('christmas-days').textContent = timeLeft;
  }
};
