const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const events = [
    {
        id: 1,
        label: 'JS lesson',
        description: 'My first JS lesson',
        date: '2017-07-17'
    },
    {
        id: 2,
        label: 'Flight',
        description: 'Back to Moscow',
        date: '2017-07-23'
    }
];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(events));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
