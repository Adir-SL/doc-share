function saveFunc() {
    // window.location.hash = document.getElementById("docInput").innerText.replace(/\n/g, '%0A');
    window.location.hash = encodeURIComponent(document.getElementById("docInput").innerText);
}

function loadFunc() {
    document.getElementById("docInput").innerText = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length));
}