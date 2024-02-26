import React from 'react';
import {Alert} from "antd";

type Props = {
    message?: string | null;
}

export const ErrorMessage = ({message}: Props) => {
    if(!message) {
        return null;
    }

    return <Alert message={message} type='error' />
};
