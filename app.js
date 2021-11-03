const express = require("express");
const morgan = require("morgan");
const dealerChoice = require('./dealers_choice');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const choice = dealerChoice.list();

    const html = 
    `<!DOCTYPE html>
    <html>
    <head>
    <title>World's Tallest Buildings (2021) </title>
    <link rel="stylesheet" href="/style.css" />
    </head>
    <body>ß
    <div class="news-list">
        <header><img src="/tallest-building.jpeg"/>Top 15 Tallest Buildings</header>
        ${choice.map(post => `
        <div>
            <p>
            <a href='/posts/${post.id}'><span class="news-position">${post.id}. ▲</span>${post.title}</a>
            <small>(by ${post.name})</small>
            </p>
            
        </div>`
        ).join('')}
    </div>
    </body>
    </html>`

    res.send(html);
});


const PORT = 1500;

//add app listener for logging feedback 
app.listen(PORT, () => {
    //log the app listener for the port
    console.log(`Àpp listening in port ${PORT}`);
});

