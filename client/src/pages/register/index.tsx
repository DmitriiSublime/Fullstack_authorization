import React from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {PasswordInput} from "../../components/password-input/input";
import {CustomButton} from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify='center'>
                <Card title='Зарегистрируйтесь' style={{width: "30rem"}}>
                    <Form onFinish={() => null}>
                        <CustomInput
                            type="text"
                            name="name"
                            placeholder="Имя"
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Почта"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                        />
                        <CustomButton  type="primary" htmlType="submit"  loading={false}>
                            Зарегистрироваться
                        </CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Уже зарегистрированы? <Link to={Paths.login}>Войти</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};