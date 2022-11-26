export class HelloWorld {
    constructor(text = 'Text') {
        this.text = text;
    }

    fetchData() {
        return fetch('/hello_world').then((response) => response.json()).then((data) => {
            this.text = data;

            return data;
        }).catch((error) => {
            // TODO
        });
    }
}
