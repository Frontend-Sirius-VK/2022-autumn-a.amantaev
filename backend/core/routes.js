import {MainController} from '../../frontend/controllers/MainController.js';
import {AboutController} from "../../frontend/controllers/AboutController.js";

export const ROUTES = {
    '/': MainController,
    '/about': AboutController
}
