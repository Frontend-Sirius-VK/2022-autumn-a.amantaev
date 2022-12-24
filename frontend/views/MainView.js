import {Feed} from "../components/feed/feed.js";
import {Header} from "../components/header/header.js";
import {Sidebar} from "../components/sidebar/sidebar.js";

export class MainView {
    constructor() {
        this.feed = null;
    }

    render() {
        const root = document.querySelector("#root");
        root.innerHTML = "";
        const container = document.createElement("div");
        container.classList.add("main-container");

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");
        const sidebarContainer = document.createElement("div");
        sidebarContainer.classList.add("sidebar-container");
        const feedContainer = document.createElement("div");
        feedContainer.classList.add("feed-container");

        const header = new Header(headerContainer);
        header.render();
        const sidebar = new Sidebar(sidebarContainer);
        sidebar.render();

        this.feed = new Feed(feedContainer);
        container.append(sidebarContainer, feedContainer);
        root.append(headerContainer, container);
        this.feed.render();
    }
}
