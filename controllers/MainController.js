import {MainView} from '../views/MainView.js';
import {HelloWorld} from "../models/HelloWorld.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const helloWorld = new HelloWorld();
        helloWorld.fetchData().then((data) => {
            view.updateText(data);
        });
    }
}
