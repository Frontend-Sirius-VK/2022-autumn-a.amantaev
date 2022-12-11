import EventBus from "../utils/eventBus.js";
import {Statistics} from "../components/about/statistics/statistics.js";
import {Description} from "../components/about/description/description.js";

export class AboutView {
    constructor() {
        this.description = null;
        this.statistics = null;
        EventBus.on('description:got-info', this.updateDescription.bind(this));
        EventBus.on('statistics:got-info', this.updateStatistics.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        this.description = new Description(container);
        this.statistics = new Statistics(container);

        root.append(container);
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
