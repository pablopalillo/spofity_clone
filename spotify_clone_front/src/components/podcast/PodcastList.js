import React from 'react';
import { List, Card } from 'antd';
import Icon from '@ant-design/icons';
import {
    StarOutlined,
  } from '@ant-design/icons';

class PodcastList extends React.Component {

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
                                            <img src={item.image} alt="podcast img" />
                                        </div>
                                        <div className='podcast-button'>
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