import axios from 'axios';


class UserApi {

    async loginUser(username , password) {
        return await axios.post(
            `${process.env.REACT_APP_DOMAIN}/api/api-token-auth`,
            {
                "username": username,
                "password": password
            }
        );
    }

    async registerUser(username, email, password) {
        return await axios.post(
            `${process.env.REACT_APP_DOMAIN}/api/user`,
            {
                "username": username,
                "email": email,
                "password": password
            }
        );
    }

    async loggedUserData(token) {
        return await axios.get(
            `${process.env.REACT_APP_DOMAIN}/api/logged`,
            {
                headers: {
                  'Authorization': `Token ${token}`,
                  'Access-Control-Allow-Origin' : '*'
                },
            }
        );
    }

    persistUserData(token=null, data=null) {
        const loggedToken = localStorage.getItem("token")
        if(!loggedToken && token) {
            localStorage.setItem('token', token)
        }

        if(data) {
            localStorage.setItem('user', JSON.stringify(data));
        }
    }

    getUserToken() {
        var token = null;

        if(localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        }

        return token;
    }
}
export default UserApi;