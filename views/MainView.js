export class MainView {
    constructor() {
        this.text = null;
        this.container = null;
    }

    render() {
        const root = document.querySelector('#root');
        if (!root) {
            return;
        }

        this.container = document.createElement('div');
        this.createTextElement();

        root.append(this.container);
    }

    updateText(text) {
        this.text = text;
        this.createTextElement();
    }

    createTextElement() {
        const headingElement = document.createElement('h3');
        headingElement.textContent = this.text;
        this.container.appendChild(headingElement);
    }
}
