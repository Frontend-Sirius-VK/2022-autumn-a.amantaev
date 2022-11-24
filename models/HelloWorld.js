export class HelloWorld {
    constructor(text = 'Text') {
        this.text = text;
    }

    fetchData() {
        return fetch('/hello_world').then((response) => response.json()).then((data) => {
            console.log('HelloWorld :: Получили данные с сервера!', data);
            this.text = data;

            return data;
        })
    }
}
