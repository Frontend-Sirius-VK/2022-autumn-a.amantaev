import {PostModel} from "./PostModel.js";
import EventBus from "../utils/eventBus.js";

export class PostCollection {
    constructor() {
        this.posts = [];
    }

    fetchData() {
        return fetch('/posts')
            .then((response) => response.json())
            .then((data) => {
                this.posts = data.map((item) => {
                    return new PostModel(item);
                });
                EventBus.emit('posts:got-info', data);
            });
    }
}
