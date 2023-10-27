import NavigateHeader from "../../components/NavigateHeader";
import { Checkbox, CheckboxGroup, Drawer } from 'rsuite';
import { useState } from "react";
import Arrow from '../../assets/svgs/arrow-right.svg';
const Register = () => {
    const [value, setValue] = useState(['A', 'C']);
    const [open, setOpen] = useState(false);
    return <div className="pt-[56px] px-4">
        <NavigateHeader title="사용자 등록" />
        <div className="py-8">
            <h3 className="text-[21px] font-semibold">약관동의가 필요합니다.</h3>
        </div>
        <CheckboxGroup
            name="checkboxList"
            value={value}
            onChange={value => {
                setValue(value);
            }}
        >
            <div className="py-4">
                <Checkbox value="A" className="text-base font-normal">전체동의</Checkbox>
            </div>
            <div className="flex py-4 items-center justify-between">
                <Checkbox value="B" className="text-base font-normal">마이프렌드 이용약관 동의</Checkbox>
                <button className='h-6 w-6' onClick={() => setOpen(true)}>
                    <img src={Arrow} />
                </button>
            </div>
            <div className="flex py-4 items-center justify-between">
                <Checkbox value="D" className="text-base font-normal">개인정보처리방침 동의</Checkbox>
                <button className='h-6 w-6' onClick={() => setOpen(true)}>
                    <img src={Arrow} />
                </button>
            </div>
            <div className="flex py-4 items-center justify-between">
                <Checkbox value="E" className="text-base font-normal">위치기반 서비스 동의</Checkbox>
                <button className='h-6 w-6' onClick={() => setOpen(true)}>
                    <img src={Arrow} />
                </button>
            </div>
            <div className="py-4">
                <Checkbox value="F" className="text-base font-normal">만 14세 이상입니다.</Checkbox>
            </div>
        </CheckboxGroup>

        <Drawer size={'full'} placement={'right'} open={open} onClose={() => setOpen(false)}>
            <Drawer.Header className="drawer-header-custom">
                <Drawer.Title className="text-center">이용약관</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body className="drawer-body-custom">
                <div className="py-8">
                    <div className="text-center text-lg font-semibold">마이프렌드 이용약관</div>
                </div>
                <div>
                    <p className="text-base mb-2">제 1 조 (목적)</p>
                    <span className="text-[13px] font-normal">
                        이 약관의 마이프렌드(이하 “회사”라 합니다)가 제공하는 장애인 길 안내 서비스(이하 “서비스“라 합니다)와 관련하여
                    </span>
                </div>
            </Drawer.Body>
        </Drawer>
    </div>
}
export default Register;