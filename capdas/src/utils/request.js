import axios from 'axios';

// const config = {
//     headers: {
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Headers': 'Origin, Authorization, X-Requested-With, Content-Type, Accept',
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         // "Access-Control-Request-Method": "PATCH",
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     }
// }

export const base = axios.create({
    baseURL: 'https://capdas.onrender.com/', //config
});

