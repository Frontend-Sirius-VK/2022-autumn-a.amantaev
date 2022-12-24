import {AboutController} from "../../frontend/controllers/AboutController.js";
import {ChannelController} from "../../frontend/controllers/ChannelController.js";
import {MainController} from "../../frontend/controllers/MainController.js";

export const ROUTES = [
    {
        path: "/channel/([^\\/]+)/about",
        controller: AboutController
    },
    {
        path: "/channel/(\\w+)",
        controller: ChannelController
    },
    {
        path: "/",
        controller: MainController
    }
];
