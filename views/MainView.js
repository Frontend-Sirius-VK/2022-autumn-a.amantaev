import {Feed} from "../components/feed/feed.js";
import EventBus from "../utils/eventBus.js";

export class MainView {
    constructor() {
        this.feed = null;
        EventBus.on('posts:got-info', this.updatePosts.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        this.feed = new Feed(container);

        root.append(container);
        this.feed.render();
    }

    updatePosts(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.feed.update(data);
    }
}
