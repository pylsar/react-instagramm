// файл используется для запросов
export default class InstaService {
    constructor (){
        this._apiBase = 'http://localhost:3000'; // _ означает неизменяемое значение(просто договоренность)
    }

    // метод которй позволяет получать данные
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }
    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }
    
    _transformPosts = (posts) => {
        return {
            src: posts.src,
            alt: posts.alt
        }
    }
}


