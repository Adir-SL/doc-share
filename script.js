function saveFunc() {
    window.location.hash = document.getElementById("docInput").innerText;
}

function loadFunc() {
    document.getElementById("docInput").innerText = window.location.hash;
}