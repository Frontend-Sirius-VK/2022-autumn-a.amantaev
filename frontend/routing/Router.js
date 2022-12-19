import {ROUTES} from "../../backend/core/routes.js";

export class Router {
    constructor() {
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === "A") {
            event.preventDefault();

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    go(pathname) {
        window.history.pushState({}, "", pathname);
        this.invokeController();
    }

    getChannel() {
        const pathParser = window.location.pathname.split("/");
        let channel;
        if (pathParser[1] !== undefined) {
            channel = pathParser[2];
        }
        return channel;
    }

    invokeController() {
        const channel = this.getChannel();
        const {pathname} = window.location;
        const result = ROUTES.find((route) => {
            const regexp = new RegExp(route.path );
            const matches = pathname.match(regexp);

            return Boolean(matches);
        });
        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        controller.process(channel);
    }

    start() {
        document.addEventListener("click", this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener("click", this.onDocumentClick);
    }
}

export const router = new Router();
