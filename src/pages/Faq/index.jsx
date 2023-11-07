import NavigateHeader from "@/components/NavigateHeader";
import {Input, Nav, Panel, PanelGroup, Form, Button, SelectPicker} from "rsuite";
import {forwardRef, useState} from "react";

const navItems = [
    { eventKey: 'faq', label: '자주 묻는 질문' },
    { eventKey: 'request', label: '1:1 문의' },
];

const faqs = [
    {
        id: 1,
        title: '장애인 번호 인증은 어떻게 하나요?',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <span className="max-w-[270px]">휴대폰 번호가 변경되셨으면 설정화면에서 휴대폰 <br/>번호 변경을 인증하신 후 변경완료하세요.</span>
            </div>
        },
    },
    {
        id: 2,
        title: '장애인 번호 인증은 어떻게 하나요?',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <span className="max-w-[270px]">휴대폰 번호가 변경되셨으면 설정화면에서 휴대폰 <br/>번호 변경을 인증하신 후 변경완료하세요.</span>
            </div>
        },
    },
    {
        id: 3,
        title: '장애인 번호 인증은 어떻게 하나요?',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <span className="max-w-[270px]">휴대폰 번호가 변경되셨으면 설정화면에서 휴대폰 <br/>번호 변경을 인증하신 후 변경완료하세요.</span>
            </div>
        },
    },
];

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const typeRequest = ['Eugenia', 'Bryan'].map(
    item => ({ label: item, value: item })
);
const Faq = () => {
    const [navActive, setNavActive] = useState('faq');
    const [formRequestValue, setFormRequestValue] = useState({})

    const PanelHeader = ({faq}) => {
        return <div className="flex flex-col gap-y-[10px]">
            <span className="text-[16px]">{faq.title}</span>
        </div>
    }
    return <div className="pt-[56px]">
        <NavigateHeader title='고객문의' />
        <Nav appearance="subtle" activeKey={navActive} onSelect={setNavActive}>
            {navItems.map(nav => {
                return <Nav.Item className="px-4 py-[18px] text-[16px]" eventKey={nav.eventKey} key={nav.eventKey}>
                    {nav.label}
                </Nav.Item>
            })}
        </Nav>
        {
            navActive === 'faq' && <PanelGroup accordion>
                {
                    faqs.map(faq => {
                        return <Panel header={<PanelHeader faq={faq} />} key={faq.id}>
                            <faq.content />
                        </Panel>
                    })
                }
            </PanelGroup>
        }
        {
            navActive === 'request' && <div className="px-4 py-6">
                <Form fluid formValue={formRequestValue}>
                    <Form.Group>
                        <Form.Control data={typeRequest} placeholder="문의유형" searchable={false} name="" accepter={SelectPicker} block />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="myfriend@myfreind.co.kr" name="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="제목을 입력하세요." name="" />
                    </Form.Group>
                    <Form.Group className="!mb-6">
                        <Form.Control placeholder="문의 내용을 입력하세요." rows={5} name="" accepter={Textarea} />
                    </Form.Group>
                    <Form.Group>
                        <Button appearance="primary" type="submit" block>문의하기</Button>
                    </Form.Group>
                </Form>
            </div>
        }
    </div>
}

export default Faq;
