import {Post} from "../post/post.js";
import {Loader} from "../loader/loader.js";
import EventBus from "../../utils/eventBus.js";
import {ErrorComponent} from "../error_component/error_component.js";

export class Feed {
    constructor(parent) {
        this.parent = parent;
        this.posts = null;


        EventBus.on('posts:not-found', this.error.bind(this));
        EventBus.on('posts:bad-request', this.error.bind(this));
        EventBus.on('posts:server-info', this.error.bind(this));
        EventBus.on('posts:got-info', this.update.bind(this));
        EventBus.on('posts:loading', this.render.bind(this));
    }

    render() {
        if (!this.posts && !this.loader) {
            this.parent.innerHTML = '';
            this.loader = new Loader(this.parent);
            this.loader.render();
            return;
        }
        if (!this.posts) {
            return;
        }

        this.parent.innerHTML = '';
        this.feed = document.createElement('div');
        this.feed.classList.add('feed');

        this.posts.forEach((post_data) => {
            const post = new Post(this.feed, post_data);
            post.render();
        });

        this.parent.appendChild(this.feed);
    }

    update(data) {
        if (!data) {
            return;
        }
        this.posts = data;

        this.render(this.parent);
    }

    error(data) {
        if (!data) {
            return;
        }

        this.parent.innerHTML = '';
        const errorComponent = new ErrorComponent(this.parent, data);
        errorComponent.render();
    }
}
