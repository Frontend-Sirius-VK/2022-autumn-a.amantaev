import {Post} from "../post/post.js";

export class Feed {
    constructor(parent) {
        this.parent = parent;
        this.posts = null;

        // EventBus.on('person:got-info', this.update.bind(this));
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
    //
    // update(data = {}) {
    //     if (!data || !Object.keys(data).length) {
    //         return;
    //     }
    //
    //     this.summary.update(`${data.name} ${data.surname}`, data.position);
    // }

    updatePosts(data) {
        if (!data) {
            return;
        }
        this.posts = data;

        this.render(this.parent);
    }
}
