let paragraph = document.getElementById('paragraph');
let monthInput = document.getElementById('month');
let dayInput = document.getElementById('day');
let tooltip = document.getElementsByClassName('tooltip')[0];

const displayFact = (fact) => {
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


