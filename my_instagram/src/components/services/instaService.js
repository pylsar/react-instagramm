// файл используется для запросов
export default class InstaService {
    constructor (){
        this._apiBase = 'http://localhost:3000'; // _ означает неизменяемое значение(просто договоренность)
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }

        return await res.json();
    }
}