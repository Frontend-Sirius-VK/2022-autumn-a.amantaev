import template from "./sidebar.handlebars";

export class Sidebar {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const html = template();
        this.parent.innerHTML += html;
    }
}
