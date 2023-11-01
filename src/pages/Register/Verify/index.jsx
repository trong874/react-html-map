import NavigateHeader from "@/components/NavigateHeader";
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
const Verify = () => {
    return <>
        <div className="pt-[56px]">
            <NavigateHeader title={'본인인증'} />
            <Form className="px-4 pt-6" fluid>
                <Form.Group controlId="name">
                    <Form.ControlLabel>성명</Form.ControlLabel>
                    <Form.Control name="name" placeholder="성명을 입력하세요." />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary">Submit</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    </>
}

export default Verify;