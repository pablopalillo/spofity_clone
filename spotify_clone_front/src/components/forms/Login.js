import React from 'react';
import { Layout, Space, Divider, Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';

import './form.css';
const { Header,  Content } = Layout;


class Login extends React.Component {
    render() {
        return (
        <React.StrictMode>

            <Layout className="layout">
                <Row>
                    <Col span={12} offset={6} className='form-center'>
                        <Space className='head'>
                            <div className="spotify-logo" />
                        </Space>
                        <Divider />

                        <Content>
                            <h3>Para continuar, inicia sesión en Spotify.</h3>

                            <Form layout="vertical">
                            <Form.Item label="Nombre de usuario" required>
                                <Input placeholder="Nombre de Usuario" />
                            </Form.Item>
                            <Form.Item
                                label="Contraseña"
                                required
                            >
                                <Input placeholder="Contraseña" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Submit</Button>
                            </Form.Item>
                            </Form>

                            <Divider />
                            <h3>¿No tienes cuenta?</h3>
                            <Button>Regístrate en Spotify</Button>
                        </Content>
                    </Col>
                </Row>

            </Layout>
    
        </React.StrictMode>
        );
    }
}

export default Login;