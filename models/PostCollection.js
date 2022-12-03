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
                    return new PostModel(item.text, item.title, item.subtitle, item.author, item.image_url, item.video_url, item.date, item.likes, item.dislikes, item.comments);
                    //     TODO проверить передачу параметров
                });
                // EventBus.emit('posts:got-info', data);
                //     eventBus пока еще не работает(
            });
    }


}
