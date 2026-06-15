const fs = require('fs');

async function main() {
    let html = fs.readFileSync('index.html', 'utf8');

    // The current SVG uses fill="currentColor"
    const oldSvgHeader = `<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;"><path d="M11.2574.0039`;
    // We will change it to pure white to maximize contrast on the dark background
    const newSvgHeader = `<svg viewBox="0 0 24 24" fill="#FFFFFF" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;"><path d="M11.2574.0039`;
    
    html = html.split(oldSvgHeader).join(newSvgHeader);

    // Check if there are any without the vertical-align style just in case
    const oldSvgHeaderCP = `<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.2574.0039`;
    const newSvgHeaderCP = `<svg viewBox="0 0 24 24" fill="#FFFFFF" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.2574.0039`;
    
    html = html.split(oldSvgHeaderCP).join(newSvgHeaderCP);

    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Successfully updated CodeChef logo color for better contrast.');
}

main().catch(console.error);
