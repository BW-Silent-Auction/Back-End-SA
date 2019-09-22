require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 4200;

server.listen(port, () => console.log(`** server listening on port ${port} **`));
