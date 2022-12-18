import template from "./statistics.handlebars";

export class Statistics {
    constructor(parent) {
        this.parent = parent;
        this.statistics = null;
    }

    render() {
        this.parent.innerHTML = template({statistics: this.statistics});

        this.addStatistics();
    }

    addStatistics() {
        if (!this.statistics) {
            return;
        }

        this.parent.innerHTML = template({statistics: this.statistics});
    }

    update(data) {
        if (!data) {
            return;
        }
        this.statistics = data;

        this.addStatistics();
    }
}
