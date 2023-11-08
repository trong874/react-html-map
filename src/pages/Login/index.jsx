import Logo from '@/assets/svgs/logo.svg';
import { Form, Button, Input } from 'rsuite';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const handleSubmit = () => {
        console.log(formData);
    }

    return <div className="px-4">
        <div className="mt-[107px]">
            <img src={Logo} alt="logo img" className="w-20 mx-auto" />
            <div className="mx-auto mt-7 mb-8">
                <span className="block text-center text-[21px] font-semibold ">
                    마이프렌드 서비스 가입이 <br /> 완료되었습니다.
                </span>
            </div>
        </div>
        <Form fluid onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
                <Input type='text'
                    placeholder='아이디 입력'
                    onChange={value => setFormData(pre => ({ ...pre, username: value }))}
                />
                <Input type='password'
                    placeholder='비밀번호 입력'
                    onChange={value => setFormData(pre => ({ ...pre, password: value }))}
                />
            </div>
            <Form.Group className="mt-8">
                <Button appearance="primary" to={'/service'} as={Link} block>
                    로그인
                </Button>
            </Form.Group>
        </Form>
    </div>
}
export default Login;
