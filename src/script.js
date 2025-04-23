function updatetemperature(response) {
   let temperatureElement = document.querySelector("#temperature");
   let temperature = response.data.temperature.current;
   let cityelement = document.querySelector("#searched-city");
   
   cityelement.innerHTML = response.data.city;
  
   
    temperatureElement.innerHTML = Math.round(temperature);
   }

function searchcity(city) {
    let apiKey = "b7oe38a4fa56t17674f3f0a7f3738e9e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updatetemperature);
}




function handlesearchsubmit(event) {

    event.preventDefault();
    let cityinput = document.querySelector("#city-form-input");
   
    searchcity(cityinput.value);
}
let searchformdocument = document.querySelector("#weather-form");
searchformdocument.addEventListener("submit", handlesearchsubmit);


searchcity("New York");