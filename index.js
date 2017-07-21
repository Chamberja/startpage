const dateElement = document.querySelector('.date');
const clockElement = document.querySelector('.clock');

dateElement.innerHTML = moment().format('MMMM Do YYYY');
clockElement.innerHTML = moment().format('h:mm:ss A');

function update() {
  clockElement.innerHTML = moment().format('h:mm:ss A');
}

setInterval(update, 1000);
