const express = require('express');
const app = express();
const port = 3000;

app.get('/preview', (req, res) => {
    const text = req.query.text || 'Doc Share';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="625" viewBox="0 0 1200 625">
        <rect width="100%" height="100%" fill="#fff"/>
        <text x="600" y="312.5" font-family="Arial" font-size="48" fill="#333" text-anchor="middle" dy=".3em">${text}</text>
    </svg>`;
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

app.listen(port, () => {
    console.log(`Preview server running at http://localhost:${port}`);
}); 