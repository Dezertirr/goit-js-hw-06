
const number = document.getElementById('value')
const numberIncrease = document.querySelector('[data-action="increment"]')
const numberDecrease = document.querySelector('[data-action="decrement"]')

numberIncrease.addEventListener('click', function() {
    const currentValue = parseInt(number.textContent);
    number.textContent = currentValue + 1;
  });

  numberDecrease.addEventListener('click', function() {
    const currentValue = parseInt(number.textContent);
    number.textContent = currentValue - 1;
  });