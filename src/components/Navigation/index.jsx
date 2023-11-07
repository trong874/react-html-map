import Icons from '@/assets/svgs';
import { Link } from "react-router-dom";
import {useState} from "react";
import Modal from "rsuite/Modal";
import {Button, Divider} from "rsuite";

const Navigation = () => {
    const [openModal, setOpenModal] = useState(false);

    return <>
        <nav className="nav-custom">
            <ul className="bg-white h-[70px] flex gap-x-11">
                <li className="flex flex-col items-center gap-y-1">
                    <Link to="/home">
                        <img src={Icons.Home} alt="" />
                    </Link>
                    <span className="text-[12px] text-[#4F4F4F]">홈</span>
                </li>
                <li className="flex flex-col items-center gap-y-1">
                    <Link to="/faq">
                        <img src={Icons.QuestionCircle} alt="" />
                    </Link>
                    <span className="text-[12px] text-[#4F4F4F]">문의</span>
                </li>
                <li className="flex flex-col items-center gap-y-1">
                    <span onClick={() => setOpenModal(true)}>
                        <img src={Icons.Phone} alt="" />
                    </span>
                    <span className="text-[12px] text-[#4F4F4F]">통화</span>
                </li>
                <li className="flex flex-col items-center gap-y-1">
                    <Link to="/history">
                        <img src={Icons.User} alt="" />
                    </Link>
                    <span className="text-[12px] text-[#4F4F4F]">MY</span>
                </li>
            </ul>
            <div className="flex flex-col">
                <span className="text-[11px] text-[#B6B6B6]">경기 의정부시</span>
                <span className="text-[14px] font-bold text-[#796BAF]">8-10-8282</span>
            </div>
        </nav>
        <Modal open={openModal} className="modal-call">
            <Modal.Body>
                <div className="pt-6 px-8">
                    <div className="mb-[20px] mx-auto">
                        <span className="font-medium text-[16px] text-center block">위급상황이신가요?</span>
                        <span className="text-[12px] text-center block">요청하시면 기관에서 곧 전화가 걸려옵니다.</span>
                    </div>
                    <div className="flex justify-center">
                        <Button color="red" appearance="primary" className="w-[217px]">위급 지원 전화 요청</Button>
                    </div>
                </div>
                <Divider className="my-6" />
                <div className="pt-6 px-8">
                    <div className="mb-[20px] mx-auto">
                        <span className="font-medium text-[16px] text-center block">위급상황이신가요?</span>
                        <span className="text-[12px] text-center block">요청하시면 기관에서 곧 전화가 걸려옵니다.</span>
                    </div>
                    <div className="flex justify-center">
                        <Button color="blue" appearance="primary" className="w-[217px]">위급 지원 전화 요청</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
}
export default Navigation;
