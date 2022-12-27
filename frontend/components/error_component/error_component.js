import template from "./error_component.handlebars";
import image from "../../../backend/images/error.jpg";

export class ErrorComponent {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    render() {
        const content = {data: this.data, image: image};
        this.parent.innerHTML = template(content);
    }
}
