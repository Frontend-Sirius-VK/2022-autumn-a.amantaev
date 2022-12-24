import {PostCollection} from "../models/PostCollection";
import EventBus from "../utils/eventBus";
import {ChannelView} from "../views/ChannelView";

export class MainController {
    process() {
        const view = new ChannelView();
        view.render();

        const postCollection = new PostCollection();
        EventBus.emit("posts:loading");

        postCollection.fetchData();
    }
}
