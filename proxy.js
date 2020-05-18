const httpProxy = require('http-proxy');
var ip = require('ip');


// listens on local host port given by
const LISTEN_PORT = 8000

// proxy target details
const TARGET_IP = '25.414.113.74'
const TARGET_PORT = 2341


httpProxy
.createProxyServer({target:`http://${TARGET_IP}:${TARGET_PORT}`})
.listen(LISTEN_PORT);

console.log('Listening on port', LISTEN_PORT);

console.log(`This PC / localhost IP: ${ip.address()}`);
console.log(`http proxy created for http://${ip.address()}:${LISTEN_PORT}  <-->  http://${TARGET_IP}:${TARGET_PORT}`);


