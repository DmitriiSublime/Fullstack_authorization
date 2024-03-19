import React from 'react';
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../custom-input";
import {ErrorMessage} from "../error-message";
import {CustomButton} from "../custom-button";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}

export const EmployeeForm = ({onFinish, title, btnText, error, employee}:Props<Employee>) => {
    return (
        <Card title={title} style={{width: '30rem'}}>
            <Form name='employee-form' onFinish={onFinish} initialValues={employee}>
                <CustomInput name='firstName' placeholder='Имя' type='text'/>
                <CustomInput name='lastName' placeholder='Фамилия' type='text'/>
                <CustomInput name='age' placeholder='Возраст' type='number'/>
                <CustomInput name='address' placeholder='Адрес' type='text'/>
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton htmlType='submit'>
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>

        </Card>
    );
};

