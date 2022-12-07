import {Post} from "../post/post.js";
import EventBus from "../../utils/eventBus.js";

export class Feed {
    constructor(parent) {
        this.parent = parent;
        this.posts = null;
    }

    render() {
        const feed = document.createElement('div');
        feed.classList.add('feed');

        if (!this.posts) {
            return;
        }

        this.posts.forEach((post_data) => {
            const post = new Post(feed, post_data);
            post.render();
        })

        this.parent.appendChild(feed);
    }

    update(data) {
        if (!data) {
            return;
        }
        this.posts = data;

        this.render(this.parent);
    }
}
