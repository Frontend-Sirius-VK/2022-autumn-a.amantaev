import EventBus from "../utils/eventBus.js";
import {Statistics} from "../components/statistics/statistics.js";
import {Description} from "../components/description/description.js";
import {Header} from "../components/header/header.js";

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
        const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("about-main-container");
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("description");
        const statisticsContainer = document.createElement("div");
        statisticsContainer.classList.add("statistics");
        aboutContainer.append(descriptionContainer, statisticsContainer);

        const header = new Header(headerContainer);
        header.render();

        this.description = new Description(descriptionContainer);
        this.statistics = new Statistics(statisticsContainer);

        root.append(headerContainer, aboutContainer);
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
