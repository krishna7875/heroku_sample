const http = require('http');
const fs = require('fs');

const PORT = process.env.port;
const HOST = "localhost";

const landingPage = fs.readFileSync('./home.html');

const server = http.createServer((req, resp) => {
    if (req.url === "/") {
        return resp.end(landingPage);
    } else if (req.url === "/about") {
        return resp.end("<h1>  ABOUT PAGE </h1>");
    }else if (req.url === "/conct") {
        return resp.end("<h1>  CONTACT PAGE </h1>");
    }else {
        return resp.end("<h1>  404 PAGE NOT FOUNT </h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is working`);
})
