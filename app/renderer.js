// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// const BrowserWindow = require('electron').remote.BrowserWindow
// const path = require('path')


// alert('shello');

function test() {
    const newWindowBtn = document.getElementsByName("fname");
    // let contents = win.webContents
    console.log(newWindowBtn[0].value);
    fetch('https://github.com/')
        .then(res => res.text())
        .then(body => console.log(body))

}
