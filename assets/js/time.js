// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘

window.onload = displayClock();
// Clock function
function displayClock() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get clock elements
  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours()+2;
  var ampm = '';

  // Hour format
  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  // Display clock elements
  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;

  document.getElementById('month').innerText = mm;
  document.getElementById('day').innerText = dd;

  setTimeout(displayClock, 1000);
}
