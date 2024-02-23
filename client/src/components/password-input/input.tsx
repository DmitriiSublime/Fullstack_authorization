import {Form, Input} from 'antd';
import {NamePath} from 'antd/es/form/interface';
import React from 'react';

type Props = {
    name: string,
    placeholder: string,
    dependencies?: NamePath[],
    type?: string
}

export const PasswordInput = (props: Props) => {
    const {name, placeholder, dependencies} = props;

    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[{required: true, message: 'Пожалуйста, заполните обязательные поля'}, ({getFieldsValue}) => ({
                validator(_, value) {
                    if (!value) {
                        return Promise.resolve();
                    }
                    if(name === 'confirmPassword') {
                       if(!value || getFieldsValue(['password']) === value) {
                           return Promise.resolve();
                       }
                       return Promise.reject(new Error('Пароли не совпадают'));
                    } else {
                        if(value.length < 6) {
                            return Promise.reject(new Error('Пароль должен быть не менее 6 символов'));
                        }
                        return Promise.resolve();
                    }
                },
            })]}
                >
            <Input.Password
                placeholder={placeholder}
                size='large'
            />
        </Form.Item>


    );
};