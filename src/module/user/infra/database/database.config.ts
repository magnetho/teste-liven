import { config } from 'dotenv';
config({ path: '.env' });
export default {  
    conn_type: String(process.env.CONN_TYPEORM_TYPE),
    conn_database_url: process.env.DATABASE_URL,
    conn_host: process.env.CONN_TYPEORM_HOST,
    conn_database: process.env.CONN_TYPEORM_DATABASE,
    conn_username: process.env.CONN_TYPEORM_USERNAME,
    conn_password: process.env.CONN_TYPEORM_PASSWORD,
    conn_port: parseInt(process.env.CONN_TYPEORM_PORT),

 
};