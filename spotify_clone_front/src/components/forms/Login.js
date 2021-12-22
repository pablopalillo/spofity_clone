import React, { useState } from 'react';
import { Layout, Space, Divider, Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";

import './form.css';
import './buttons.css';
import  UserApi from '../../api/users';
const { Content } = Layout;


const Login = () => {

    const [form] = Form.useForm();
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    function handleUsernameChange(e) {
        setUserName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit() {
        if(userName && password) {

            const login = new UserApi();

            login.loginUser(userName, password).then(res => {
                const token = res.data.token;
                login.persistUserData(token);

                login.loggedUserData(token).then(res => {
                    login.persistUserData(null, res.data);
                    window.location.reload();
                }).catch(error => {
                    console.error(error);
                })
                

            }).catch(error => {
                console.error(error);

                if(error.response.status === 400) {
                    alert("username or password are incorrect")
                }
            })

        }
    }

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

                            <Form 
                             className="spotify-form"
                             layout="vertical"
                             form={form}
                            >
                            <Form.Item label="Nombre de usuario" required>
                                <Input placeholder="Nombre de Usuario"
                                       value={userName}
                                       onChange={handleUsernameChange}
                                />
                            </Form.Item>
                            <Form.Item
                                lay
                                label="Contraseña"
                                required
                            >
                                <Input type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Contraseña" />
                            </Form.Item>
                            <Form.Item>
                                <Button 
                                    className="spotify-btn primary"
                                    onClick={handleSubmit}>Iniciar sesión</Button>
                            </Form.Item>
                            </Form>

                            <Divider />
                            <h3>¿No tienes cuenta?</h3>
                            <Link 
                                className="spotify-btn secondary"
                                to={`/register`}
                                >
                                    Regístrate en Spotify
                            </Link>
                        </Content>
                    </Col>
                </Row>
            </Layout>

        </React.StrictMode>
    );   
}

export default Login;