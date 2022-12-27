import template from "./loader.handlebars";

export class Loader {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        this.parent.innerHTML += template();
    }
}
