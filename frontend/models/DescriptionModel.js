import EventBus from "../utils/eventBus.js";

export class DescriptionModel {
    constructor(channelName) {
        this.description = null;
        this.channelName = channelName;
    }

    fetchData() {
        return fetch("/api/description?" + new URLSearchParams({
            channel: this.channelName
        }))
            .then((response) => response.json())
            .then((data) => {
                this.description = data;
                EventBus.emit("description:got-info", data);
            });
    }
}
