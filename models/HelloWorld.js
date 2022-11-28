export class HelloWorld {
    constructor(text= null ) {
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
