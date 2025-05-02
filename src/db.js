import pg from 'pg';
import {DB_HOST,DB_DATABASE,DB_PORT,DB_PASSWORD,DB_USER} from "./confi.js";

const dbClient = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port:DB_PORT,
    //Solo para AWS
    ssl:{
        rejectUnauthorized: false
    }
});
/*
const  client =  await dbClient.connect();
const {rows} = await client.query("SELECT NOW(),1 as Fecha,1 as DummyColumn");
console.log(rows[0]);
client.release();
*/


export {dbClient};
