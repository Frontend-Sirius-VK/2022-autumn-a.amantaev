export class PostModel {
    constructor({text = null, title = null, subtitle = null, author = null, imageUrl = null, videoUrl = null, date = null, likes = null, dislikes = null, comments = null}) {
        this.text = text;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.date = date;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}