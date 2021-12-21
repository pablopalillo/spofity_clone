import React from 'react';
import { List, Card } from 'antd';

class FavoriteList extends React.Component {

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
                                <Card className='podcast-card'>
                                    <div className='podcast-action'>
                                        <div className='podcast-img'>
                                            <img src={process.env.REACT_APP_DOMAIN+item.podcast.image} alt="podcast img" />
                                        </div>
                                    </div>
                                    <p className='podcast-title'><strong>{item.podcast.name}</strong></p>
                                    <p className='podcast-description'>{item.podcast.description}</p>
                                </Card>
                            </List.Item>
                        )}
                    /> 
                }
            </React.StrictMode>
        )
    }

}

export default FavoriteList;