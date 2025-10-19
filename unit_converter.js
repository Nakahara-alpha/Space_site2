const inputEl = document.getElementById("input");
const convertEl = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length_result");
const volumeEl = document.getElementById("volume_result");
const massEl = document.getElementById("mass_result");
const convertBtn = document.getElementById("convert-btn");
const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.785;
const kiloToPound = 2.204;
const poundToKilo = 0.45359237;

function generateResult(input, derivative1, unit1, derivative2, unit2) {
  let derived1 = (Number(inputEl.value) * derivative1).toFixed(3);
  let derived2 = (Number(inputEl.value) * derivative2).toFixed(3);
  return `${input} ${unit1} = ${derived1} ${unit2} | ${input} ${unit2} = ${derived2} ${unit1}`;
}

convertEl.addEventListener("click", function () {
  let input = inputEl.value;
  let sentence1 = generateResult(
    input,
    meterToFeet,
    "meters",
    feetToMeter,
    "feet"
  );
  lengthEl.textContent = sentence1;
  let sentence2 = generateResult(
    input,
    literToGallon,
    "liters",
    gallonToLiter,
    "gallons"
  );
  volumeEl.textContent = sentence2;
  let sentence3 = generateResult(
    input,
    kiloToPound,
    "kilograms",
    poundToKilo,
    "pounds"
  );
  massEl.textContent = sentence3;
});
