import {MainView} from "../views/MainView";
import {PostCollection} from "../models/PostCollection";
import EventBus from "../utils/eventBus";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const postCollection = new PostCollection();
        EventBus.emit("posts:loading");

        postCollection.fetchData();
    }
}