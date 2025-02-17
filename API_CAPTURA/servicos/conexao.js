import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'aspuser',
    password: 'captura123',
    database: 'captura'
});

export default pool;