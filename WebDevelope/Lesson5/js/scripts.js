function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}
var currentDate = new Date();
var now = new Date();
var dayOfWeek = now.getDay();
if (dayOfWeek != 5) {
    document.getElementById("alert").style.display = "none";
}