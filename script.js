function saveFunc() {
    if (document.getElementById("docInput").innerText == '\n') {
        document.getElementById("docInput").innerText = '';
    }
    window.location.hash = encodeURIComponent(document.getElementById("docInput").innerText);
    updateSocialPreview();
}

function loadFunc() {
    document.getElementById("docInput").innerText = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length));
    updateSocialPreview();
}

function updateSocialPreview() {
    const text = decodeURIComponent(window.location.hash.slice(1, window.location.hash.length)) || 'Doc Share';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="625" viewBox="0 0 1200 625"><rect width="100%" height="100%" fill="#fff"/><text x="600" y="312.5" font-family="Arial" font-size="48" fill="#333" text-anchor="middle" dy=".3em">${text}</text></svg>`;
    const base64Svg = btoa(svg);
    
    // Update Open Graph image
    document.querySelector('meta[property="og:image"]').setAttribute('content', `data:image/svg+xml;base64,${base64Svg}`);
    // Update Twitter image
    document.querySelector('meta[property="twitter:image"]').setAttribute('content', `data:image/svg+xml;base64,${base64Svg}`);
    // Update URL
    const currentUrl = window.location.href.split('#')[0];
    document.querySelector('meta[property="og:url"]').setAttribute('content', currentUrl);
    document.querySelector('meta[property="twitter:url"]').setAttribute('content', currentUrl);
}