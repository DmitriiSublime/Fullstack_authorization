import React from 'react';
import {Layout} from "../../components/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employee-form";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useAddEmployeeMutation} from "../../app/services/employees";
import {Employee} from "@prisma/client";
import {Paths} from "../../paths";
import {isErrorWithMessage} from "../../utils/is-error-with-message";

export const AddEmployee = () => {
    const [error, setError] = React.useState<string | undefined>('');
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [addEmployee] = useAddEmployeeMutation();

    React.useEffect(() => {
        if(!user) {
            navigate('/login')
        }

    }, [navigate, user]);

    const handleAddEmployee = async(data: Employee) => {
        try {
            await addEmployee(data).unwrap();
            navigate(`${Paths.status}/created`)
        } catch (e) {
            const maybeError = isErrorWithMessage(e);
            if(maybeError) {
                setError(e.data.message);
            } else {
                setError('Неизвестная ошибка');
            }
        }
    };

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <EmployeeForm
                    onFinish={handleAddEmployee}
                    btnText='Добавить сотрудника'
                    title='Добавить сотрудника'
                    // employee={}
                    error={error}
                />
            </Row>
        </Layout>
    );
};

