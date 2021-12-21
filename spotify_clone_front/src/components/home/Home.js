import React, { useState, useEffect } from 'react';
import Login from '../../components/forms/Login';
import Register from '../../components/forms/Register'; 
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
                <Register/>
            ) : <Login/> }

        </React.StrictMode>
    )
}

export default Home;