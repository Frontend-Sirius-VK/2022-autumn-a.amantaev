import template from './description.handlebars';

export class Description {
    constructor(parent) {
        this.parent = parent;
        this.description = null;
    }

    render() {
        this.parent.innerHTML = template({descriptionText: this.description});

        this.addDescription();
    }

    addDescription() {
        if (!this.description) {
            return;
        }

        this.parent.innerHTML = template({descriptionText: this.description});
    }

    update(data) {
        if (!data) {
            return;
        }
        this.description = data;

        this.addDescription();
    }
}
