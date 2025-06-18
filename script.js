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
    const text = encodeURIComponent(decodeURIComponent(window.location.hash.slice(1, window.location.hash.length)) || 'Doc Share');
    const previewUrl = `http://localhost:3000/preview?text=${text}`;
    
    // Update Open Graph image
    document.querySelector('meta[property="og:image"]').setAttribute('content', previewUrl);
    // Update Twitter image
    document.querySelector('meta[property="twitter:image"]').setAttribute('content', previewUrl);
    // Update URL
    const currentUrl = window.location.href.split('#')[0];
    document.querySelector('meta[property="og:url"]').setAttribute('content', currentUrl);
    document.querySelector('meta[property="twitter:url"]').setAttribute('content', currentUrl);
}