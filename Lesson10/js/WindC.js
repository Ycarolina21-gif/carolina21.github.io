const temperature = parseFloat(document.getElementById('currentTemp').textContent);
const Wind = parseFloat(document.getElementById('windSpeed').textContent);

if(temperature<=50 || Wind >=3){
const windChill  =(35.74 + (0.6215*temperature)-(35.75*Math.pow(Wind,0.16))+(0.4275*temperature*Math.pow(Wind,0.16))).toFixed(2);
document.getElementById('windChill').innerHTML = windChill;
}
else{
    const windChill =('N/A');
    document.getElementById('windChill').innerHTML = windChill;
}
