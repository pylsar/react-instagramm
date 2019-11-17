import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src='https://static.wixstatic.com/media/632d61_73f435284b574a2686e5f503b04135d0~mv2_d_2560_1707_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg'
                alt= 'picture'
                name='horhe'
            />
            <Palette />
        </div>
    )
}

export default Profile;