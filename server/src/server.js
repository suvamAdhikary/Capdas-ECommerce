const app = require('./index');

const connect = require('./configs/db');

require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT, async () => {
    await connect();

    console.log(`listening on port ${PORT}`);
});