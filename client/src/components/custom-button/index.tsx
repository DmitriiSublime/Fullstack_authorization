import {Button, Form} from 'antd';
import React from 'react';

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "primary" | "default" | "dashed" | "link" | "text" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
};


export const CustomButton = (props: Props) => {
    const {children, htmlType = "button", type, danger, loading, shape, icon, onClick} = props;

    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >
                {children}
            </Button>
        </Form.Item>
    );
};

