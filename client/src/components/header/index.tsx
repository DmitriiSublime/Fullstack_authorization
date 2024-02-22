import React from 'react';
import styles from './index.module.css';
import { Layout, Space, Typography } from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import { CustomButton } from "../custom-button";
import { Link } from 'react-router-dom';
import { Paths } from "../../paths";

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Paths.home}>
                    <CustomButton type='default'>
                        <Typography.Title level={5}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type='default' icon={<UserOutlined/>}>
                        Зарегистрировать
                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type='default' icon={<LoginOutlined/>}>
                        Войти
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};