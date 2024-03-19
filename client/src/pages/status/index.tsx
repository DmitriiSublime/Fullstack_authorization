import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Result, Row} from "antd";

const Statuses: Record<string, string> = {
    created: 'Пользователь создан',
    updated: 'Пользователь обновлен',
    deleted: 'Пользователь удалён',
};

export const Status = () => {
    const {status} = useParams();

    return (
        <Row align='middle' justify='center' style={{width: '100%'}}>
            <Result
                status={status ? 'success' : 404}
                title={status ? Statuses[status] : 'Страница не найдена'}
                extra={
                <Button key='dashboard'>
                    <Link to='/'>На главную</Link>
                </Button>
            }
            />
        </Row>
    );
};