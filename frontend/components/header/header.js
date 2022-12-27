import logoPhoto from "../../../backend/images/logo.svg";
import hamburgerPhoto from "../../../backend/images/hamburger_icon.svg";
import searchPhoto from "../../../backend/images/search.svg";
import template from "./header.handlebars";

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const html = template({hamburgerPhoto,logoPhoto,searchPhoto});
        this.parent.innerHTML += html;
    }
}
