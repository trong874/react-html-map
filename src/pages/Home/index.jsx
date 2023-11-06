import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import MapImage from '@/assets/images/map.png';
import {Input, InputGroup, Modal} from "rsuite";
import Svgs from '@/assets/svgs';
const Home = () => {
    return (
        <div className="pt-[56px]">
            <SectionHeader/>
            <div className="relative w-full h-[100vh] p-3" style={{backgroundImage: `url(${MapImage})`}}>
                <div className="fixed top-[68px] left-4 right-4">
                    <InputGroup inside>
                        <Input placeholder="목적지를 입력하세요."/>
                        <InputGroup.Button>
                            <img src={Svgs.Search} alt=""/>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
                <div className="fixed left-3 bottom-[94px]">
                    <div className="w-[42px] h-[42px] bg-image" style={{backgroundImage: `url(${Svgs.TargetCircle})`}} />
                </div>
                <div className="fixed right-3 bottom-[94px]">
                    <div className="bg-white px-3 border border-[#796BAF] rounded h-8 flex items-center">
                        <span className="text-[13px]">서울 성동구 왕십리로 77</span>
                    </div>
                </div>
                <div className="fixed right-20 left-20 top-1/2 -translate-y-1/2">
                    <div className="w-[44px] h-[64px] bg-image mx-auto mb-3" style={{backgroundImage: `url(${Svgs.Pin})`}} />
                    <div className="bg-white rounded-md py-4">
                        <div className="border-b border-b-[#E9ECF5] px-3 pb-3">
                            <div className="flex gap-x-[22px]">
                                <button className="rounded text-[11px] text-[#9069FF] bg-[#EBE5FF] p-[6px]">운행준비중</button>
                                <div className="flex flex-col gap-y-[6px]">
                                    <span className="text-[11px]">주행시간</span>
                                    <span className="text-[16px] font-bold">0</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 pt-2">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M6.99999 3.5C6.67916 3.5 6.4045 3.38577 6.17603 3.15729C5.94756 2.92882 5.83332 2.65417 5.83332 2.33333C5.83332 2.0125 5.94756 1.73785 6.17603 1.50938C6.4045 1.2809 6.67916 1.16667 6.99999 1.16667C7.32082 1.16667 7.59548 1.2809 7.82395 1.50938C8.05242 1.73785 8.16666 2.0125 8.16666 2.33333C8.16666 2.65417 8.05242 2.92882 7.82395 3.15729C7.59548 3.38577 7.32082 3.5 6.99999 3.5ZM9.91666 12.8333V9.91667H6.99999C6.67916 9.91667 6.4045 9.80243 6.17603 9.57396C5.94756 9.34549 5.83332 9.07083 5.83332 8.75V5.25C5.83332 4.92917 5.94756 4.65452 6.17603 4.42604C6.4045 4.19757 6.67916 4.08333 6.99999 4.08333C7.23332 4.08333 7.43506 4.13438 7.6052 4.23646C7.77534 4.33854 7.95763 4.50139 8.15207 4.725C8.6868 5.36667 9.17048 5.8066 9.60312 6.04479C10.0358 6.28299 10.5292 6.40695 11.0833 6.41667V7.58333C10.568 7.58333 10.0479 7.47153 9.52291 7.24792C8.99791 7.02431 8.54582 6.75695 8.16666 6.44583V8.45833H9.91666C10.2375 8.45833 10.5121 8.57257 10.7406 8.80104C10.9691 9.02952 11.0833 9.30417 11.0833 9.625V12.8333H9.91666ZM5.83332 12.8333C5.02638 12.8333 4.33853 12.549 3.76978 11.9802C3.20103 11.4115 2.91666 10.7236 2.91666 9.91667C2.91666 9.21667 3.13784 8.59931 3.5802 8.06458C4.02256 7.52986 4.57916 7.19445 5.24999 7.05833V8.25417C4.90971 8.39028 4.6302 8.6066 4.41145 8.90313C4.1927 9.19965 4.08332 9.5375 4.08332 9.91667C4.08332 10.4028 4.25346 10.816 4.59374 11.1563C4.93402 11.4965 5.34721 11.6667 5.83332 11.6667C6.21249 11.6667 6.55034 11.5573 6.84687 11.3385C7.14339 11.1198 7.35971 10.8403 7.49582 10.5H8.69166C8.55555 11.1708 8.22013 11.7274 7.68541 12.1698C7.15068 12.6122 6.53332 12.8333 5.83332 12.8333Z" fill="#2F80ED"/>
                                    </svg>
                                    <span className="text-[11px] text-[#2F80ED] font-semibold">휠체어</span>
                                </div>
                                <span className="text-[13px] font-bold">8-10-8282</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation/>
        </div>
    )
}
export default Home;
