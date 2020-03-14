const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3014d71ceff446035940314c162afafa";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Temp').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
   currentTemp.textContent =jsObject.main.temp;

  

  });