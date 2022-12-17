export class Statistics {
    constructor(parent) {
        this.parent = parent;
        this.statistics = null;
    }

    render() {
        this.container = document.createElement('div');
        this.container.classList.add('statistics');

        const statisticsHeader = document.createElement('div');
        statisticsHeader.classList.add('statistic-header');
        statisticsHeader.textContent = 'Описание';
        this.container.append(statisticsHeader);

        this.parent.appendChild(this.container);

        this.addStatistics();
    }

    addStatistics() {
        if (!this.statistics) {
            return;
        }
        const statisticList = document.createElement('div');
        statisticList.classList.add('statistic-list');

        this.statistics.forEach((statisticData) => {
            const statisticElement = document.createElement('div');
            statisticElement.classList.add('statistic-data');
            statisticElement.textContent = statisticData;
            statisticList.append(statisticElement);
        });

        this.container.append(statisticList);
    }

    update(data) {
        if (!data) {
            return;
        }
        this.statistics = data;

        this.addStatistics();
    }
}
