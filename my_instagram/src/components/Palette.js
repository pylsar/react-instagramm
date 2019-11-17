import React, {Component} from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: []
    }

    componentDidMount(){  // когда компонент уже загрузился
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)  // обрабатываем если все норм
            .catch(this.onError)  // обрабатываем если чтото пошло не так
    }
    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos: photos
        })
    }

    renderItems(arr){
        return arr.map( item => {
            const {src , alt} = item;
            return (
                <img src={src} alt={alt}></img>
            )
        })
    }

    render(){
        const {error, photos} = this.state;

        if(error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(photos);

        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}