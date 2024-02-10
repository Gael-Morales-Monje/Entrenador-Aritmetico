
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");
const values = document.querySelector("#value");
const values_output = document.querySelector(".value-output");
const time = document.querySelector("#time");
const time_output = document.querySelector(".time-output");

output.textContent = price.value;
values_output.textContent = values.value;
time_output.textContent = time.value;


price.addEventListener("input", function () {
    output.textContent = price.value;
});
time.addEventListener("input", function () {
    time_output.textContent = time.value;
});

values.addEventListener("input", function () {
    values_output.textContent = values.value;
});