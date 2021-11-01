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


const validateBirthday = (month, day) => {
  if (month > 0 && month <= 12 && day > 0 && day <= 31) {
    return true;
  }
}


let callCount = 0;

const fetchFact = async (event) => {
  event.preventDefault();
   
  let month = monthInput.value;
  let day = dayInput.value;

  if (validateBirthday(month, day)) {
    callCount++;
    if (callCount < 3) {
      toggleTooltip();
    }

    let response = await fetch(`https://number-api-swart.vercel.app/fact/${month}/${day}`);
    let data = await response.json();
      
    displayFact(data.text);
  } else {
    birthday.innerText = "";
    paragraph.innerText = "So sorry, that's not a valid date D:";
  }

}


