import {Checkbox, Drawer} from "rsuite";
import Arrow from "@/assets/svgs/arrow-right.svg";
import {useState} from "react";
import CloseIcon from "@/assets/svgs/CloseIcon";
import Svgs from "@/assets/svgs";
import CameraImage from "@/assets/images/camera.png";
import PlayerCircle from "@/assets/svgs/player-circle.svg";

const BlackBox = () => {
    const [open, setOpen] = useState(false);

    return <div className="pt-4">
        <ul>
            <li className="flex p-4 items-center justify-between border-b border-b-[#E9ECF5]" onClick={() => setOpen(true)}>
                <span>2023-10-18 13:00:20</span>
                <button className='h-6 w-6'>
                    <img src={Arrow} alt="arrow" />
                </button>
            </li>
            <li className="flex p-4 items-center justify-between border-b border-b-[#E9ECF5]" onClick={() => setOpen(true)}>
                <span>2023-10-18 13:00:20</span>
                <button className='h-6 w-6'>
                    <img src={Arrow} alt="arrow" />
                </button>
            </li>
            <li className="flex p-4 items-center justify-between border-b border-b-[#E9ECF5]" onClick={() => setOpen(true)}>
                <span>2023-10-18 13:00:20</span>
                <button className='h-6 w-6'>
                    <img src={Arrow} alt="arrow" />
                </button>
            </li>
            <li className="flex p-4 items-center justify-between border-b border-b-[#E9ECF5]" onClick={() => setOpen(true)}>
                <span>2023-10-18 13:00:20</span>
                <button className='h-6 w-6'>
                    <img src={Arrow} alt="arrow" />
                </button>
            </li>
        </ul>
        <Drawer size={'full'} placement={'right'} open={open} onClose={() => setOpen(false)}>
            <Drawer.Header className="drawer-header-custom">
                <Drawer.Title className="text-center">영상보기</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body className="drawer-body-custom !px-0">
                <div className="relative h-[180px] w-full">
                    <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <img src={Svgs.PlayerCircle} alt="" />
                    </span>
                    <img src={CameraImage} className="w-full h-full object-cover" alt="" />
                </div>
                <span className="block my-5 ml-4">파일정보</span>
                <div className="flex gap-x-8 p-4 border-b border-b-[#E9ECF5]">
                    <span className="text-[#9FA5B8]">재생시간</span>
                    <span className="text-[16px]">12:33</span>
                </div>
                <div className="flex gap-x-8 p-4 border-b border-b-[#E9ECF5]">
                    <span className="text-[#9FA5B8]">저장일시</span>
                    <span className="text-[16px]">2023-10-18 13:00:20</span>
                </div>
                <div className="flex justify-center gap-x-4 mt-12 mx-16">
                    <button className="px-4 py-3 bg-[#F3F3F3] rounded flex-1">
                        <span className="text-[#BDBDBD] text-[14px] font-semibold">삭제</span>
                    </button>
                    <button className="px-4 py-3 bg-[#EBE5FF] rounded flex-1">
                        <span className="text-[#796BAF] text-[14px] font-semibold">내보내기</span>
                    </button>
                </div>
            </Drawer.Body>
        </Drawer>
    </div>
}

export default BlackBox;
