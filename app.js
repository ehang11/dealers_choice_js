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
    <div class="container">
    <img src="/skyline.png"/> <h1 class ="bottom-left"> World's Tallest Buildings (2021) </h1> 
    </div>
    <title> </title>
    <link rel="stylesheet" href="/style.css" />
    
    </head>

    <body>
    <div class="news-list">
       <header> Top 15 Tallest Buildings </header>
        ${choice.map(post => `
        <div>
            <p>
            <a href='/posts/${post.id}'><span class="news-position">${post.id}. ▲</span>${post.name}</a>
            <small> ${post.location} </small>
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
    console.log(`Àpp listening in port http://localhost:${PORT}`);
});

