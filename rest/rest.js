var express = require('express')
var bodyParser = require('body-parser')
const fs = require('fs')
var pdf = require('html-pdf')

var app = express()
let port = 3000
app.use(bodyParser.json())

app.post(`/my`, (req, res) => {
    let body = req.body
    body.createdat = new Date()
    res.json(body)
})

app.get(`/account`, (req, res) => {
    let ac = getAccount()
    res.json(ac)
})

function getAccount() {
    return {
        no : '989856',
        bal : 8989,
        lastupdate : new Date(),
        nm : 'android'
    }
}

app.post('/invoice', (req, res) => {
    let invDt = req.body
    let htmlInvoice = `
    <html>
        <head>
            <title> My Name </title>
        </head>
        <body>
             <h1> Customer Name is ${invDt['custNm']}</h1>
        </body>
    </html>
    `
    fs.writeFile('./inv.html', htmlInvoice, err =>{
        if(err) throw err
        console.log(`Data written successfully`)
        res.sendfile(`${__dirname}/inv.html`)

        //covert html to pdf and send json response

        var html = fs.readFileSync('./inv.html', 'utf8');
        var options = { format: 'A4' };

        pdf.create(html, options).toFile('./invoice.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
    })
})

app.listen(port, () => console.log(`Express Server Running on port ${port}`))