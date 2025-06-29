function updateMetaTags(content) {
    const currentUrl = window.location.href;
    const title = content || 'Doc Share';

    // Update page title
    document.title = title;
    if (content == '\n') {
        document.title = 'Doc Share';
    }
}

function saveFunc() {
    const content = document.getElementById("docInput").innerText;
    if (content == '\n') {
        document.getElementById("docInput").innerText = '';
    }
    window.location.hash = encodeURIComponent(content);
    updateMetaTags(content);
}

function loadFunc() {
    const content = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length));
    document.getElementById("docInput").innerText = content;
    updateMetaTags(content);
}

// Update metadata when the URL changes
window.addEventListener('hashchange', function () {
    const content = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length));
    updateMetaTags(content);
});