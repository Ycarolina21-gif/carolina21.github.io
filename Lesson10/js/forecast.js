const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&cnt=40&units=imperial&appid=3014d71ceff446035940314c162afafa"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject1) => { 
      console.log(jsObject1);   
    var day1 = new Date();
    var day = day1.getDay();
    var daylist = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    console.log(day);
    
for (i=1; i<6; i++) {
    var forecastDay = day + i;
    if (forecastDay >= 7) {
        forecastDay = forecastDay - 7;
    }
    document.getElementById('day' + i).textContent = daylist[forecastDay];
}

const fivedayforecast =jsObject1.list.filter(x => x.dt_txt.includes('18:00:00'));
console.log(fivedayforecast);
for ( let i=0; i<fivedayforecast.length; i++) {
    var one=1
        var imagesrc = 'https://openweathermap.org/img/w/' + jsObject1.list[i].weather[0].icon + '.png';
        var desc = jsObject1.list[i].weather[0].description;
        document.getElementById(`temp${i+1}`).textContent= Math.round(fivedayforecast[i].main.temp);
        document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
  
        

        
}

});