import React from 'react';
import { List, Card } from 'antd';
import Icon from '@ant-design/icons';
import {
    StarOutlined,
  } from '@ant-design/icons';

import  UserApi from '../../api/users';
import  PodcastApi from '../../api/podcast';

class PodcastList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(podcastId) {
        const user = new UserApi();
        const userToken = user.getUserToken();

        const podcastApi = new PodcastApi();

        podcastApi.saveFavoritePodcast(userToken, podcastId).then(res => {
            alert("Fav podcast added");
        }).catch(error => {
            console.error(error);
        })
    }

    render() {
        const podcasts = this.props.podcasts;

        return (
            <React.StrictMode>
                {podcasts &&
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={podcasts}
                        renderItem={item => (
                            <List.Item>
                                <Card className='podcast-card' onClick={() => this.handleClick(item.id)}>
                                    <div className='podcast-action'>
                                        <div className='podcast-img'>
                                            <img src={item.image} alt="podcast img" />
                                        </div>

                                        <div className='podcast-button' >
                                            <Icon component={StarOutlined} className='podcast-button-icon' />
                                        </div>
                                    </div>
                                    <p className='podcast-title'><strong>{item.name}</strong></p>
                                    <p className='podcast-description'>{item.description}</p>
                                </Card>
                            </List.Item>
                        )}
                    /> 
                }
            </React.StrictMode>
        )
    }

}

export default PodcastList;