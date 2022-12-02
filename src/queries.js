const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
})

const getPosts = async () => {
    try {
        const result = await pool.query('SELECT * FROM posts')
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPosts
}