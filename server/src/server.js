const app = require('./index');

const cors = require('cors');

const connect = require('./configs/db');

require('dotenv').config();

const { PORT } = process.env;

const corsOptions ={
    origin:`http://localhost:3000`, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.listen(PORT, async () => {
    await connect();

    console.log(`listening on port ${PORT}`);
});