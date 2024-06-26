const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
const cookieSession = require('cookie-session');
const app = express();
const passportSetup = require('./controllers/passport');
const authRoute = require('./routes/auth')

app.use(
    cookieSession({
        name:"session",
        keys:['anmol'],
        maxAge: 24 * 60 * 60 * 100,
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:'http://localhost:3000',
        methods:'GET, POST, PUT, DELETE',
        credentials:true,
    })
)

app.use('/auth',authRoute);

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});

