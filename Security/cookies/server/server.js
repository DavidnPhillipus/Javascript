const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

app.get('/save-users-username', (req, res) => {
    console.log(req.cookies);
    res.cookie("normal", "value", { maxAge: 1000 * 60 * 60 })
    res.cookie("secure", "value", { maxAge: 1000 * 60 * 60, secure: true })
    res.cookie("httpOnly", "value", { maxAge: 1000 * 60 * 60, httpOnly: true })
    res.cookie("both", "value", { maxAge: 1000 * 60 * 60, secure: true, httpOnly: true })

    
})

app.listen(3001)

    