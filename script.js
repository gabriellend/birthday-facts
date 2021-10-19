let paragraph = document.getElementById('paragraph');
let monthInput = document.getElementById('month');
let dayInput = document.getElementById('day');
let tooltip = document.getElementsByClassName('tooltip')[0];
let birthday = document.getElementById('birthday');

const displayFact = (fullFact) => {
  let factArray = fullFact.split(' ');
  let birthdate = factArray.splice(0, 2).join(' ');
  let fact = factArray.splice(1).join(' ');

  birthday.innerText = birthdate;
  paragraph.innerText = fact;
}

const toggleTooltip = () => {
  tooltip.classList.toggle('toggle-tooltip');
}

let callCount = 0;

const fetchFact = async (event) => {
  event.preventDefault();

  if (callCount < 2) {
    toggleTooltip();
  }

  callCount++;
   
  let month = monthInput.value;
  let day = dayInput.value;
  let response = await fetch(`http://numbersapi.com/${month}/${day}/date?json`);
  let data = await response.json();

  displayFact(data.text);
}


