import {PostModel} from "./PostModel.js";
import EventBus from "../utils/eventBus.js";

export const ERROR_TEXT_404 = "Ошибка 404. Страница не найдена";
export const ERROR_TEXT_400 = "Ошибка 400. Проверьте введеные данные";
export const ERROR_TEXT_500 = "Ошибка 500. Сервис не доступен. Обратитесь в поддержку";

export class PostCollection {
    constructor() {
        this.posts = [];
    }

    fetchData() {
        return fetch("/api/posts")
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit("posts:not-found", ERROR_TEXT_404);
                    return;
                }

                if (status === 400) {
                    EventBus.emit("posts:bad-request", ERROR_TEXT_400);
                    return;
                }

                if (status === 500) {
                    EventBus.emit("posts:server-info", ERROR_TEXT_500);
                    return;
                }

                return response.json();
            })
            .then((data) => {
                this.posts = data.map((item) => {
                    return new PostModel(item);
                });
                EventBus.emit("posts:got-info", data);
            });
    }
}
