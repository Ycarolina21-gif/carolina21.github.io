const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3014d71ceff446035940314c162afafa";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Temp').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
   currentTemp.textContent =jsObject.main.temp;

   let temperature = jsObject.main.temp;
   let Wind = jsObject.wind.speed;
  
   if(temperature<=50 && Wind >3){
   let windChill  =35.74 + 0.6215*temperature-35.75*Math.pow(Wind,0.16)+0.4275*temperature*Math.pow(Wind,0.16);
   document.getElementById('windChill').innerHTML = Math.round(windChill*10)/10;

  }
   else{
       const windChill =('N/A');
       document.getElementById('windChill').innerHTML = windChill;
   }
   

  });