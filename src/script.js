function handlesearchsubmit(event) {

    event.preventDefault();
    let cityinput = document.querySelector("#city-form-input");
    let cityelement = document.querySelector("#searched-city");
    cityelement.innerHTML = cityinput.value;
}
let searchformdocument = document.querySelector("#weather-form");
searchformdocument.addEventListener("submit", handlesearchsubmit);