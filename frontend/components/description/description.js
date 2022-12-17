export class Description {
    constructor(parent) {
        this.parent = parent;
        this.description = null;
    }

    render() {
        this.container = document.createElement('div');
        this.container.classList.add('description');

        const descriptionHeader = document.createElement('div');
        descriptionHeader.classList.add('description-header');
        descriptionHeader.textContent = 'Описание';

        this.container.append(descriptionHeader);
        this.parent.appendChild(this.container);

        this.addDescription();
    }

    addDescription() {
        const container = document.createElement('div');
        container.classList.add('description-text');

        if (!this.description) {
            return;
        }
        container.textContent = this.description;

        this.container.appendChild(container);
    }

    update(data) {
        if (!data) {
            return;
        }
        this.description = data;

        this.addDescription();
    }
}
