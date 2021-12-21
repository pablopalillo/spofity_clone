import axios from 'axios';


class PodcastApi {

    async podcastsList(token) {
        return await axios.get(
            `${process.env.REACT_APP_DOMAIN}/api/podcasts`,
            {
               headers: {
                 'Authorization': `Token ${token}`,
                 'Access-Control-Allow-Origin' : '*'
               },
           }
        );
    }

    async favoriteList(token) {
        const userId = this.getIdUser();
        return await axios.get(
            `${process.env.REACT_APP_DOMAIN}/api/favorites/${userId}`,
            {
               headers: {
                 'Authorization': `Token ${token}`
               },
           }
        );
    }

    getIdUser() {
        var user = null;

        if(localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"));
            user = data.id;
        }

        return user;
    }
}
export default PodcastApi;