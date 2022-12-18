import {AboutView} from "../views/AboutView.js";
import {DescriptionModel} from "../models/DescriptionModel.js";
import {StatisticsModel} from "../models/StatisticsModel.js";

export class AboutController {
    process() {
        const view = new AboutView();
        view.render();

        const description = new DescriptionModel();
        description.fetchData();
        const statistics = new StatisticsModel();
        statistics.fetchData();
    }
}
