import {Post} from "../post/post.js";
import EventBus from "../../utils/eventBus.js";

export class Feed {
    constructor(parent) {
        this.parent = parent;
        this.posts = null;
        // EventBus.on('posts:got-info', this.updatePosts().bind(this));
        // eventBus пока еще не работает(
    }

    render(container) {
        const feed = document.createElement('div');
        feed.classList.add('feed');

        if (!this.posts) {
            return;
        }

        this.posts.forEach((post_data) => {
            const post = new Post(feed, post_data);
            post.render();
        })

        container.appendChild(feed);
    }

    updatePosts(data) {
        if (!data) {
            return;
        }
        this.posts = data;

        this.render(this.parent);
    }
}
