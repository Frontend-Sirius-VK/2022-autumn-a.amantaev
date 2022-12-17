export class ErrorComponent {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('error-container');
        const header = document.createElement('div');
        header.classList.add('error-header');
        header.textContent = this.data;
        const image = document.createElement('img');
        image.classList.add('error-image');
        // TODO убрать хардкод
        image.src = '/backend/images/error.jpg';

        container.append(header, image);
        this.parent.appendChild(container);
    }
}
