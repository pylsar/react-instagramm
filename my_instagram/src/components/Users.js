import React from 'react';
import User from './User';

const Users = () => {
    return(
        <div className="right">
            <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                alt="tiger"
                name="Alex" />
                <div className="users__block">
                <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                    alt="tiger"
                    name="Alex"
                    min />
                <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                    alt="tiger"
                    name="Alex"
                    min />
                <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                    alt="tiger"
                    name="Alex"
                    min />
                <User src="https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200" 
                    alt="tiger"
                    name="Alex"
                    min />            
                </div>
        </div>
    )
}

export default Users;