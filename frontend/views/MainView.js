import {Feed} from "../components/feed/feed.js";
import {Header} from "../components/header/header.js";

export class MainView {
    constructor() {
        this.feed = null;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header-container');
        const feedContainer = document.createElement('div');
        feedContainer.classList.add('feed-container');

        const header = new Header(headerContainer);
        header.render();

        this.feed = new Feed(feedContainer);
        container.append(headerContainer, feedContainer);
        root.append(container);
        this.feed.render();
    }
}
