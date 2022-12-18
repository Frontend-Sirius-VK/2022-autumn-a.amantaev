import {MainView} from "../views/MainView.js";
import {PostCollection} from "../models/PostCollection.js";
import EventBus from "../utils/eventBus.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const postCollection = new PostCollection();
        EventBus.emit("posts:loading");
        postCollection.fetchData();
    }
}
