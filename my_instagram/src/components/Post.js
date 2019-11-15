import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render(){
        return(
            <div className="post">
                <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                    alt="tiger"
                    name="Alex"
                    min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some acount
                </div>
                <div className="post__descr">
                    text text text text text text
                </div>
            </div>    
        )
    }
}