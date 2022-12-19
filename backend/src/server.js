"use strict";

const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const db = require("./queries");

app.use(morgan("dev"));
app.use(express.static("."));

const PORT = 3000;

app.get("/api/posts", async (req, res) => {
    try {
        const channel = req.query.channel;
        const posts = await db.getPosts(channel);
        res.json(posts);
    } catch (e) {
        res.json([]);
    }
});

app.get("/api/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await db.getPostById(id);
        res.json(result);
    } catch (e) {
        res.json(null);
    }
});

app.post("/api/posts", async (req, res) => {
    try {
        const {title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments} = req.body;
        if (title && subtitle && text && author && imageUrl && videoUrl && date && likes && dislikes && comments) {
            const result = await db.createPost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, id);
            res.json(result);
        } else {
            res.json(null);
        }        res.json({id});
    } catch (e) {
        res.json(null);
    }
});

app.delete("/api/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await db.deletePost(id);
    } catch (e) {
    }
});

app.patch("/api/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments} = req.body;
        if (title && subtitle && text && author && imageUrl && videoUrl && date && likes && dislikes && comments) {
            const result = await db.updatePost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, id);
            res.json(result);
        } else {
            res.json(null);
        }
    } catch (e) {
        res.json(null);
    }
});

app.get("/api/description", async (req, res) => {
    try {
        const channel = req.query.channel;
        const result = await db.getDescription(channel);
        res.json(result);
    } catch (e) {
        res.json([]);
    }
});

app.get("/api/statistics", async (req, res) => {
    try {
        const channel = req.query.channel;
        const result = await db.getStatistics(channel);
        res.json(result);
    } catch (e) {
        res.json([]);
    }
});

app.listen(PORT, function () {
    console.log(`Server listening PORT ${PORT}`);
});
