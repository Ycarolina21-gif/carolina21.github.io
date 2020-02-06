function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}
var currentDate = new Date();
var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
var day = new Date().getDay();
document.getElementById("day1").innerText = dayNames[(day + 1) % 7];
document.getElementById("day2").innerText = dayNames[(day + 2) % 7];
document.getElementById("day3").innerText = dayNames[(day + 3) % 7];
document.getElementById("day4").innerText = dayNames[(day + 4) % 7];
document.getElementById("day5").innerText = dayNames[(day + 5) % 7];
if (day != 5) {
    document.getElementById("alert").style.display = "none";
}
