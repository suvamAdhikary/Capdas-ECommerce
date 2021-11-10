import axios from 'axios';

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const base = axios.create({
    baseURL: 'http://localhost:6060', config
});

