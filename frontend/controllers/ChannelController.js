import EventBus from "../utils/eventBus.js";
import {PostCollection} from "../models/PostCollection.js";
import {ChannelView} from "../views/ChannelView.js";

export class ChannelController {
    process(channelName) {
        const view = new ChannelView();
        view.render();

        const postCollection = new PostCollection(channelName);
        EventBus.emit("posts:loading");

        postCollection.fetchData(channelName);
    }
}
