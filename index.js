/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("conversion-input");
const convertBtn = document.getElementById("conversion-btn");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    let val = inputEl.value;
    lengthEl.innerHTML += `
        <p>
            ${val} meters = ${meterToFeet(val)} feet | 
            ${val} feet = ${feetToMeter(val)} meters
        </p>
    `;
    volumeEl.innerHTML += `
        <p>
            ${val} liters = ${literToGallon(val)} gallons | 
            ${val} gallons = ${gallonToLiter(val)} liters
        </p>
    `;
    massEl.innerHTML += `
        <p>
            ${val} kilos = ${kilogramToPound(val)} pounds | 
            ${val} pounds = ${poundToKilogram(val)} kilos
        </p>
    `;
});

function meterToFeet(val) {
    return (val * 3.281).toFixed(3);
}

function feetToMeter(val) {
    return (val / 3.281).toFixed(3);
}

function literToGallon(val) {
    return (val * 0.264).toFixed(3);
}

function gallonToLiter(val) {
    return (val / 0.264).toFixed(3);
}

function kilogramToPound(val) {
    return (val * 2.204).toFixed(3);
}

function poundToKilogram(val) {
    return (val / 2.204).toFixed(3);
}
