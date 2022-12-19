import EventBus from "../utils/eventBus.js";
import {Statistics} from "../components/statistics/statistics.js";
import {Description} from "../components/description/description.js";
import {Header} from "../components/header/header.js";
import {Sidebar} from "../components/sidebar/sidebar.js";

export class AboutView {
    constructor(channelName) {
        this.description = null;
        this.statistics = null;

        EventBus.on("description:got-info", this.updateDescription.bind(this));
        EventBus.on("statistics:got-info", this.updateStatistics.bind(this));
    }

    render() {
        const root = document.querySelector("#root");
        root.innerHTML = "";
        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");
        const container = document.createElement("div");
        container.classList.add("main-container");

        const sidebarContainer = document.createElement("div");
        sidebarContainer.classList.add("sidebar-container");
        const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("about-main-container");
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("description");
        const statisticsContainer = document.createElement("div");
        statisticsContainer.classList.add("statistics");
        aboutContainer.append(descriptionContainer, statisticsContainer);

        const header = new Header(headerContainer);
        header.render();
        const sidebar = new Sidebar(sidebarContainer);
        sidebar.render();

        this.description = new Description(descriptionContainer);
        this.statistics = new Statistics(statisticsContainer);

        container.append(sidebarContainer, aboutContainer);
        root.append(headerContainer, container);
        this.description.render();
        this.statistics.render();
    }

    updateDescription(data = []) {
        if (!data || data.length === 0) {
            return;
        }

        this.description.update(data);
    }

    updateStatistics(data = []) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.statistics.update(data);
    }
}
