
const number = document.getElementById('value')
const numberIncrease = document.querySelector('[data-action="increment"]')
const numberDecrease = document.querySelector('[data-action="decrement"]')

let currentValue = 0

numberIncrease.addEventListener('click', function() {
    currentValue += 1
    number.textContent = currentValue;
  });

  numberDecrease.addEventListener('click', function() {
    currentValue -= 1
    number.textContent = currentValue;
  });