import React, { useState, useEffect } from 'react';
import Login from '../../components/forms/Login';
import Podcast from '../../components/podcast/Podcast';
import UserApi from '../../api/users';


const Home = () => {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => { 
        const user = new UserApi();
        setUserToken(user.getUserToken());
    }, [])

    return(
        <React.StrictMode>

            {userToken ? (
                <Podcast/>
            ) : <Login/> }

        </React.StrictMode>
    )
}

export default Home;