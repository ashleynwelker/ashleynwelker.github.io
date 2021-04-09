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
cont dayNumber = today.getDay();