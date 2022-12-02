export class PostModel {
    constructor(text = null, title = null, subtitle = null, author = null, image_url = null, video_url = null, date = null, likes = null, dislikes = null, comments = null) {
        this.text = text;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.image_url = image_url;
        this.video_url = video_url;
        this.date = date;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}