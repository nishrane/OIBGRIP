const inputField = document.querySelector('#input-field');
const unitSelect = document.querySelector('#unit-select');
const convertButton = document.querySelector('#convert-button');
const output = document.querySelector('#output');

convertButton.addEventListener('click', function() {
  let inputValue = parseFloat(inputField.value);
  let selectedUnit = unitSelect.value;
  if (isNaN(inputValue)) {
    output.textContent = 'Please enter a valid temperature';
  } else {
    if (selectedUnit === 'celsius') {
      let kelvin = inputValue + 273.15;
      output.textContent = kelvin.toFixed(2) + ' Kelvin';
    } else {
      let celsius = inputValue - 273.15;
      output.textContent = celsius.toFixed(2) + ' Celsius';
    }
  }
});
