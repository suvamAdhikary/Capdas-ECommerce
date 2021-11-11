const app = require('./index');

// const cors = require('cors');

const connect = require('./configs/db');

require('dotenv').config();

const { PORT } = process.env;

// const corsOptions ={
//     origin:`http://localhost:3000`, 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
    
// }

// var whitelist = ['http://localhost:3000', `http://localhost:${PORT}`]
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }
// app.use('/', cors(corsOptionsDelegate), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
//   })
// app.use(cors(corsOptions));

// app.use(cors())
 
// app.use('/', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.listen(PORT, async () => {
    await connect();

    console.log(`listening on port ${PORT}`);
});