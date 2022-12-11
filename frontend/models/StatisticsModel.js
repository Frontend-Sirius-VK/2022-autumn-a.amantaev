import EventBus from "../utils/eventBus.js";

export class StatisticsModel {
    constructor() {
        this.statistics = [];
    }

    fetchData() {
        return fetch('/statistics')
            .then((response) => response.json())
            .then((data) => {
                this.statistics = data;
                EventBus.emit('statistics:got-info', data);
            });
    }
}
