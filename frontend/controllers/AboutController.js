import {AboutView} from "../views/AboutView.js";
import {DescriptionModel} from "../models/DescriptionModel.js";
import {StatisticsModel} from "../models/StatisticsModel.js";

export class AboutController {
    process(channelName) {
        const view = new AboutView();
        view.render();

        const description = new DescriptionModel(channelName);
        description.fetchData();
        const statistics = new StatisticsModel(channelName);
        statistics.fetchData();
    }
}
