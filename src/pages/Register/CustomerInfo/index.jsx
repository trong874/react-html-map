import NavigateHeader from "@/components/NavigateHeader";
import {Button, Form, Input, InputGroup, SelectPicker, Stack} from "rsuite";
import ButtonSendOtp from "@/components/ButtonSendOtp";
import {useState} from "react";
import {Link} from "react-router-dom";

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({label: item, value: item})
);

const CustomerInfo = () => {
    const [formValue, setFormValue] = useState({})

    return <div className="pt-[56px] pb-3">
        <NavigateHeader title="사용자 정보" />
        <Form className="px-4 pt-6" fluid formValue={formValue}>
            <Form.Group>
                <Form.ControlLabel>장애인 등록번호</Form.ControlLabel>
                <Form.Control placeholder="홍길동" name="" disabled/>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>성명</Form.ControlLabel>
                <div className="flex gap-x-4">
                    <Input className="flex-1" placeholder='장애인 등록번호 입력'/>
                    <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">인증</button>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>아이디</Form.ControlLabel>
                <div className="flex gap-x-4">
                    <Input className="flex-1" placeholder='아이디 입력'/>
                    <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">중복확인</button>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>비밀번호</Form.ControlLabel>
                <div className="flex flex-col gap-y-3">
                    <Input placeholder='비밀번호 입력'/>
                    <Input placeholder='비밀번호 재입력'/>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>이메일</Form.ControlLabel>
                <Input placeholder='이메일 주소 입력'/>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>이메일</Form.ControlLabel>
                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-4">
                        <Input className="flex-1" placeholder='우편번호'/>
                        <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">우편번호 찾기</button>
                    </div>
                    <Input placeholder='기본주소'/>
                    <Input placeholder='상세주소'/>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>보호자 휴대폰 인증</Form.ControlLabel>
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
                <Button appearance="primary" to={'/login'} as={Link} block>인증완료</Button>
            </Form.Group>
        </Form>
    </div>
}
export default CustomerInfo;
