import {PostModel} from "./PostModel.js";
import EventBus from "../utils/eventBus.js";

export class PostCollection {
    constructor() {
        this.posts = [];
    }

    fetchData() {
        return fetch('/posts')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('posts:not-found', 'Ошибка 404. Страница не найдена');
                    return;
                }

                if (status === 400) {
                    EventBus.emit('posts:bad-request', 'Ошибка 400. Проверьте введеные данные');
                    return;
                }

                if (status === 500) {
                    EventBus.emit('posts:server-info', 'Ошибка 500. Сервис не доступен. Обратитесь в поддержку');
                    return;
                }

                return response.json()
            })
            .then((data) => {
                this.posts = data.map((item) => {
                    return new PostModel(item);
                });
                EventBus.emit('posts:got-info', data);
            });
    }
}
