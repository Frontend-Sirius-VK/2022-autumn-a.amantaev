import {Feed} from "../components/feed/feed.js";

export class MainView {
    constructor() {
        this.feed = null;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        this.feed = new Feed(container);

        root.append(container);
        this.feed.render(container);
    }
}
