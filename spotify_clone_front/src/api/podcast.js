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
}
export default PodcastApi;