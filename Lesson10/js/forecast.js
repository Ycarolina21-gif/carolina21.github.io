const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&cnt=40&units=imperial&appid=3014d71ceff446035940314c162afafa"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((forecastData) => {
    console.log(forecastData); 
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
var one = 1;
for (i=0; i<35; i++) {
    if (forecastData.list[i].dt_txt.includes("18:00:00")) {
        var imagesrc = 'https://openweathermap.org/img/w/' + forecastData.list[i].weather[0].icon + '.png';
        var desc = forecastData.list[i].weather[0].description;
        
        document.getElementById('icon' + one).setAttribute('src', imagesrc);
        document.getElementById('icon' + one).setAttribute('alt', desc);

        document.getElementById('temp' + one).textContent = Math.round(forecastData.list[i].main.temp); 
        one=one+1;}
       
}

});