import axios from 'axios';


class UserApi {

    loginUser(username , password) {
        return axios.post(
            `${process.env.REACT_APP_DOMAIN}/api/api-token-auth`,
            {
                "username": username,
                "password": password
            }
        );
    }

    registerUser(username, email, password) {
        return axios.post(
            `${process.env.REACT_APP_DOMAIN}/api/user`,
            {
                "username": username,
                "email": email,
                "password": password
            }
        );
    }

    persistUserData(token=null, data=null) {
        const loggedToken = localStorage.getItem("token")
        if(!loggedToken && token) {
            localStorage.setItem('token', token)
        }

        if(data) {
            localStorage.setItem('user', data);
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