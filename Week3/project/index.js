// Your code goes in here
// Hides info part when we load page
document.querySelector('#info').style.display = 'none';

// DOM Element
const billAmount = document.getElementById('price');
const chooseOption = document.getElementById('options');
const peopleAmount = document.getElementById('people');
const priceOutput = document.getElementById('priceOutput');
const infoEach = document.getElementById('infoEach');

function tipCalculation() {
  let billForPerson = (billAmount.value * chooseOption.value) / peopleAmount.value;
  billForPerson = (Math.floor(billForPerson * 100) / 100).toFixed(2);

  if (billAmount.value === '' || peopleAmount.value === '' || chooseOption.value === 0)
    return alert('You need to fill in all the fields!');
  if (peopleAmount.value > 1) infoEach.textContent = `each`;
  if (peopleAmount.value < 1) alert('Write positive value for people count');

  document.querySelector('#info').style.display = 'block';
  priceOutput.innerHTML = billForPerson;
}

// Add Event Listener
const btnCalculate = document.getElementById('btnCalculate');
btnCalculate.addEventListener('click', tipCalculation);
