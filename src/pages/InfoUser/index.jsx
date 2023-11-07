import NavigateHeader from "@/components/NavigateHeader";
import {Button, Form, Input, InputGroup, Radio, RadioGroup, SelectPicker, Stack} from "rsuite";
import ButtonSendOtp from "@/components/ButtonSendOtp";
import {useState} from "react";
import {Link} from "react-router-dom";

const InfoUser = () => {
    const [formValue, setFormValue] = useState({})

    return <div className="pt-[56px] pb-3">
        <NavigateHeader title="사용자 정보" />
        <Form className="px-4 pt-6" fluid formValue={formValue}>
            <Form.Group>
                <Form.ControlLabel>성명</Form.ControlLabel>
                <Form.Control placeholder="홍길동" name="" disabled/>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>휴대폰 번호</Form.ControlLabel>
                <div className="flex gap-x-4">
                    <Input className="flex-1" placeholder='010-****-12**' disabled/>
                    <Link to='/phone-modify' className="py-[18px] text-[#333] border border-[#333] rounded-[6px] text-center min-w-[75px] px-2">
                        변경
                    </Link>
                </div>
            </Form.Group>
            <div className="my-[18px] text-[#9069FF]">
                <span>휴대폰 번호를 변경하셨다면 연결해주세요.</span>
            </div>
            <ButtonSendOtp text="인증번호 요청"/>
            <Form.Group className="mt-[18px]">
                <Form.ControlLabel>장애인 등록번호</Form.ControlLabel>
                <div className="flex gap-x-4">
                    <Input className="flex-1" placeholder='경기 의정부시 2-******-12' disabled/>
                    <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">인증</button>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>이메일</Form.ControlLabel>
                <div className="flex flex-col gap-y-3">
                    <Input type="email" placeholder='myfriend@naver.com'/>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>주소</Form.ControlLabel>
                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-4">
                        <Input className="flex-1" placeholder='70088'/>
                        <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">우편번호 찾기</button>
                    </div>
                    <Input placeholder='경기 의정부시'/>
                    <Input placeholder='마이프렌드 빌라'/>
                </div>
            </Form.Group>
            <Form.Group className="mt-[18px]">
                <Form.ControlLabel>장애인 등록번호</Form.ControlLabel>
                <div className="flex gap-x-4">
                    <Input className="flex-1" placeholder='경기 의정부시 2-******-12' disabled/>
                    <button className="py-[18px] border border-[#333] rounded-[6px] min-w-[75px] px-2">인증</button>
                </div>
            </Form.Group>
            <Form.Group className="mt-[18px]">
                <Form.ControlLabel>음성가입 서비스 지원</Form.ControlLabel>
                <RadioGroup name="radioList" inline>
                    <Radio value="A">지원가능</Radio>
                    <Radio value="B">지원안함</Radio>
                </RadioGroup>
            </Form.Group>
            <Button className="!p-3 w-[120px] text-[#111]">서비스 해지</Button>
            <Form.Group className="mt-5">
                <Button appearance="primary" as={Link} block>정보수정</Button>
            </Form.Group>
        </Form>
    </div>
}
export default InfoUser;
