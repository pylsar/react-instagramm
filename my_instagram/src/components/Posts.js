import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component{
    render(){
        return(
            <div className="left">
                <Post src="https://cdn25.img.ria.ru/images/153102/43/1531024341_0:15:3072:1743_600x0_80_0_0_d537d7831eeaa2bab376a15e060e7ec5.jpg" alt="instagram"/>
                <Post src="https://cdn21.img.ria.ru/images/155982/01/1559820160_0:176:3072:1904_600x0_80_0_0_75f40f380e49f2561274b50a7abc6ecd.jpg" alt="second" />
            </div>
        )
    }
}