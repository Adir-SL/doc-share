function updateMetaTags(content) {
    const currentUrl = window.location.href;
    const title = content || 'Doc Share';
    
    // Update page title
    document.title = title;
    
    // Update Open Graph tags
    document.getElementById('og-title').setAttribute('content', title);
    document.getElementById('og-url').setAttribute('content', currentUrl);
    
    // Update Twitter tags
    document.getElementById('twitter-title').setAttribute('content', title);
    document.getElementById('twitter-url').setAttribute('content', currentUrl);
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
window.addEventListener('hashchange', function() {
    const content = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length));
    updateMetaTags(content);
});