
const number = document.getElementById('value')
const numberPlus = document.querySelector('[data-action="increment"]')
const numberMinus = document.querySelector('[data-action="decrement"]')

numberPlus.addEventListener('click', function() {
    const currentValue = parseInt(number.textContent);
    number.textContent = currentValue + 1;
  });

  numberMinus.addEventListener('click', function() {
    const currentValue = parseInt(number.textContent);
    number.textContent = currentValue - 1;
  });