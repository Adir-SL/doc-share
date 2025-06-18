function updateMetaTags(content) {
    // Update page title
    document.title = content || 'Doc Share';
    
    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]').setAttribute('content', content || 'Doc Share');
    document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
    
    // Update Twitter tags
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', content || 'Doc Share');
    document.querySelector('meta[property="twitter:url"]').setAttribute('content', window.location.href);
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