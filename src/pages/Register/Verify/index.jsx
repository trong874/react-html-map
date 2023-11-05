import NavigateHeader from "@/components/NavigateHeader";
import {
    Form,
    Button,
    Stack,
    SelectPicker,
    InputGroup,
    Input
} from 'rsuite';
import {useState} from "react";
import ButtonSendOtp from "@/components/ButtonSendOtp";
import {Link} from "react-router-dom";

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({label: item, value: item})
);

const Verify = () => {
    const [formValue, setFormValue] = useState({})
    return <div className="pt-[56px]">
        <NavigateHeader title={'본인인증'}/>
        <Form className="px-4 pt-6" fluid formValue={formValue}>
            <Form.Group>
                <Form.ControlLabel>성명</Form.ControlLabel>
                <Form.Control
                    name="name"
                    placeholder="성명을 입력하세요."
                    onChange={value => {
                        setFormValue(pre => ({
                            ...pre,
                            name: value,
                        }))
                    }}/>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>주민번호</Form.ControlLabel>
                <Stack spacing={10}>
                    <Stack.Item flex={5}>
                        <Form.Control name="password" placeholder="******" type="password" autoComplete="off"/>
                    </Stack.Item>
                    <span>-</span>
                    <Stack.Item flex={1}>
                        <Form.Control name="password" placeholder="*" type="password" autoComplete="off"/>
                    </Stack.Item>
                    <Stack.Item flex={3}>
                        <span>● ● ● ● ● ●</span>
                    </Stack.Item>
                </Stack>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>휴대폰 번호</Form.ControlLabel>
                <Stack spacing={10}>
                    <Stack.Item flex={2}>
                        <SelectPicker placeholder="선택" data={data} searchable={false}/>
                    </Stack.Item>
                    <Stack.Item flex={5}>
                        <Form.Control name="password" placeholder="휴대폰 뒷자리" type="text" autoComplete="off"/>
                    </Stack.Item>
                </Stack>
            </Form.Group>
            <Form.Group>
                <div className="flex flex-col gap-y-[10px]">
                    <ButtonSendOtp text="인증번호 요청"/>
                    <InputGroup inside>
                        <Input placeholder="인증번호 6자리 입력"/>
                        <InputGroup.Addon className="text-xs text-[#D91A23]">03:55</InputGroup.Addon>
                    </InputGroup>
                </div>
            </Form.Group>
            <Form.Group className="mt-5">
                <Button appearance="primary" to={'/register/info'} as={Link} block>인증완료</Button>
            </Form.Group>
        </Form>
    </div>
}

export default Verify;