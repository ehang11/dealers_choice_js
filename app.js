const express = require("express");
const morgan = require("morgan");
const dealerChoice = require('./dealers_choice');
const app = express();

app.use(morgan('dev'));
app.use(express.static('./public'));

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
            <a href='/posts/${post.id}'><span class="news-position"> #${post.id}. </span>${post.name}</a>
            <small> ${post.location} </small>
            </p>
            
        </div>`
        ).join('')}
    </div>
    </body>
    </html>`

    res.send(html);
});

app.get("/posts/:id", (req, res, next) => {
    const buildingID = dealerChoice.find(req.params.id);
    const choice = dealerChoice.list();

    if(!buildingID) {
    const pageNotFound = 
    `<!DOCTYPE html>
    <html>
    <head> PAGE NOT FOUND </head>
    </html>
    `
    res.send(pageNotFound);
    }

    else {
    const buildingInfoHTML = 
    `<!DOCTYPE html>
    <html>
    <head>
    <div class="container">
    
    </div>
    <title> </title>
    <link rel="stylesheet" href="/style.css" />
    
    </head>

    <body>
    <p >
                  
                  <h1> ${buildingID.id}. ${buildingID.name} </h1>
                    <ul> 
                        <li> Location: ${buildingID.location} </li> 
                        <li> Year Completed: ${buildingID.yearCompleted} </li> 
                        <li> Floors: ${buildingID.floors} </li> 
                        <li> Altitude: ${buildingID.altitude} </li> 
                       
                    </ul>
                 
                </p>
                <img src="/${buildingID.id}.jpeg" max-width="150px" height="500px" /> 
    </body>
    </html>`
    res.send(buildingInfoHTML);
    }

});


const PORT = 1500;

//add app listener for logging feedback 
app.listen(PORT, () => {
    //log the app listener for the port
    console.log(`Àpp listening in port http://localhost:${PORT}`);
});

