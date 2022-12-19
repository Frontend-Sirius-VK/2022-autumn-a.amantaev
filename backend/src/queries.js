const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? "localhost",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
});

async function createPost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, channel_id) {
    try {
        const result = await pool.query("INSERT INTO posts (title, subtitle, text, author, image_url, video_url, \"date\", likes, dislikes, comments, channel_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id", [title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, channel_id]);
        return result.rows[0].id;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const deletePost = async id => {
    try {
        await pool.query("DELETE FROM posts WHERE id = $1", [id]);
        return id;
    } catch (error) {
        console.log(error);
        return null;
    }
};


const getPosts = async () => {
    try {
        const channel_id = 2;
        const result = await pool.query("SELECT id, title, subtitle, text, author, image_url \"imageUrl\", video_url \"videoUrl\", \"date\", likes, dislikes, comments, channel_id FROM posts WHERE channel_id = $1", [channel_id]);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getPostById = async id => {
    try {
        const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
};

async function updatePost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, id) {
    try {
        await pool.query("UPDATE posts SET title = $1, subtitle = $2, text = $3, author = $4, image_url = $5, video_url = $6, \"date\" = $7, likes = $8, dislikes = $9, comments = $10 WHERE id = $11", [title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, id]);
        return id;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getDescription = async () => {
    try {
        const channel_id = 2;
        const result = await pool.query("SELECT text FROM descriptions WHERE channel_id = $1 LIMIT(1)", [channel_id]);
        return result.rows[0].text;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getStatistics = async () => {
    try {
        const channel_id = 2;
        const result = await pool.query("SELECT text FROM statistic_data WHERE channel_id = $1", [channel_id]);
        return result.rows.map((data) => data.text);
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    createPost,
    deletePost,
    getDescription,
    getPostById,
    getPosts,
    getStatistics,
    updatePost
};
