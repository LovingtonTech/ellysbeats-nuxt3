const http = require("http");
const app = require("./server");
const port = process.env.port || 3030;
const server = http.createServer(app);
server.listen(port, console.log(`Server running on port: ${port}`));
