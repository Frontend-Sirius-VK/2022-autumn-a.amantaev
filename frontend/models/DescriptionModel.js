import EventBus from "../utils/eventBus.js";

export class DescriptionModel {
    constructor() {
        this.description = null;
    }

    fetchData() {
        return fetch('/api/description')
            .then((response) => response.json())
            .then((data) => {
                this.description = data;
                EventBus.emit('description:got-info', data);
            });
    }
}
