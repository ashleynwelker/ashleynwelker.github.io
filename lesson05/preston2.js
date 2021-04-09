function dates() {
    var lastModified = new Date(document.lastModified);
    var currentYear = new Date();
    document.getElementById("last-modified").innerHTML = lastModified.toLocaleString();
    document.getElementById("current-year").innerHTML = currentYear.getFullYear();
}

function toggleMenu() {
    var list = document.getElementById("menu");
    if (list.style.display === "block") {
        list.style.display = "none";
    } 
    else {
        list.style.display = "block";
    }
}

const today = new Date();
const dayNumber = today.getDay();
const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}