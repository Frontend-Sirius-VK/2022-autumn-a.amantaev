import {MainView} from '../views/MainView.js';
import {PostCollection} from "../models/PostCollection.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const postCollection = new PostCollection();
        postCollection.fetchData();
    }
}
