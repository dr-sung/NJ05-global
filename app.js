const express = require('express');
const app = express();

global.loginMessage = "Login";

app.get('/', (req, res) => {
    let loginPage = `
            <html><head><title>Login</title></head>
            <body>
                <h3>${global.loginMessage}</h3>
                <form action="/login">
                    username: <input type="text" name="username"><br>
                    password: <input type="password" name="password"><br>
                    <input type="submit" value="Login">
                </form>
        `;
    res.send(loginPage);
});

app.get('/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    if (password != 'ppp') {
        global.loginMessage = 'Password incorrect! Try again!';
        return res.redirect('/');
    }
    global.loginMessage = "Login";
    res.send(`Username: ${username} Password: ${password}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});