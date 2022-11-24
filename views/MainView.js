import {HelloWorld} from "../models/HelloWorld.js";

export class MainView {
    constructor() {
    }

    render() {
        const root = document.querySelector('#root');

        const container = document.createElement('div');
        const headingElement = document.createElement('h3');

        const helloWorld = new HelloWorld();
        helloWorld.fetchData().then(() => {
            headingElement.textContent = helloWorld.text;
        });

        container.appendChild(headingElement);
        root.append(container);
    }
}
