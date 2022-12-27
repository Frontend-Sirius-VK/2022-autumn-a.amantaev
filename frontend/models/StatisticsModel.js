import EventBus from "../utils/eventBus.js";

export class StatisticsModel {
    constructor(channelName) {
        this.statistics = [];
        this.channelName = channelName;
    }

    fetchData() {
        return fetch("/api/statistics?" + new URLSearchParams({
            channel: this.channelName
        }))
            .then((response) => response.json())
            .then((data) => {
                this.statistics = data;
                EventBus.emit("statistics:got-info", data);
            });
    }
}
