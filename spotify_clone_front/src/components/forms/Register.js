import React, { useState, useEffect } from 'react';
import { Layout, Space, Divider, Row, Col, Alert } from 'antd';
import { Form, Input, Button } from 'antd';

import './form.css';
import './buttons.css';
import  UserApi from '../../api/users';
const { Content } = Layout;


const Register = () => {

    const [form] = Form.useForm();
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [done, setDone] = useState(null);
    const [doneAlert, setDoneAlert] = useState(null);

    useEffect(() => {

        if(done) {
            setUserName(null);
            setEmail(null);
            setPassword(null);
            setDone(null);
            setDoneAlert(true);
        }

      });

    function handleUsernameChange(e) {
        setUserName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }


    function handleSubmit() {
        if(userName && email && password) {

            const login = new UserApi();

            login.registerUser(userName, email, password).then(res => {
                setDone(true);
            }).catch(error => {
                console.error(error);

                if(error.response.status === 400) {
                    const errorData = error.response.data;
                    alert(Object.values(errorData)[0][0])
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
                        <h1>Regístrate gratis para escuchar</h1>
                        <Divider />

                        <Content>
                            <h3>Registrarte con tu correo electrónico.</h3>
                            {doneAlert ? (
                                <Alert message="User registred" type="success" showIcon />
                            ) : null}

                            <Form 
                             className="spotify-form"
                             layout="vertical"
                             form={form}
                            >
                            <Form.Item label="¿Cuál es tu correo electrónico?" required>
                                <Input type="email"
                                       placeholder="Correo Electrónico"
                                       value={email}
                                       onChange={handleEmailChange}
                                />
                            </Form.Item>
                            <Form.Item label="¿Cómo quieres que te llamemos?" required>
                                <Input placeholder="Nombre de Usuario"
                                       value={userName}
                                       onChange={handleUsernameChange}
                                />
                            </Form.Item>
                            <Form.Item
                                lay
                                label="Crea una contraseña"
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
                                    onClick={handleSubmit}>Registrarte</Button>
                            </Form.Item>
                            </Form>
                        </Content>
                    </Col>
                </Row>
            </Layout>

        </React.StrictMode>
    );   
}

export default Register;