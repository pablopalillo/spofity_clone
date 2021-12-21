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
        return await axios.get(
            `${process.env.REACT_APP_DOMAIN}/api/favorites/4`,
            {
               headers: {
                 'Authorization': `Token ${token}`
               },
           }
        );
    }
}
export default PodcastApi;