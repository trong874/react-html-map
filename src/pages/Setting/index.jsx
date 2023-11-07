import NavigateHeader from '@/components/NavigateHeader';
import Arrow from '@/assets/svgs/arrow-right.svg';
import { Checkbox } from 'rsuite';

import { Link } from 'react-router-dom';

const Setting = () => {
    return <div className="pt-[56px]">
        <NavigateHeader title="설정" />
        <div className="bg-[#F4F5F9] min-h-[100vh] pt-4">
            <Link to="/" className='flex justify-between bg-white p-4 mb-3 border-y border-y-[#E9ECF5]'>
                <span className='text-[16px] text-[#333]'>회원정보</span>
                <button className='h-6 w-6'>
                    <img src={Arrow} alt="arrow" />
                </button>
            </Link>
            <div className='flex justify-between bg-white p-4 mb-3 border-y border-y-[#E9ECF5]'>
                <span className='text-[16px] text-[#333]'>위치기반 이용동의</span>
                <Checkbox value="A" className="w-6 h-6 flex items-center justify-center" />
            </div>

            <div className='border-t border-t-[#E9ECF5] mb-3'>
                <div className='bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[#828282]'>알림설정</span>
                </div>
                <div className='flex justify-between bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[16px] text-[#333]'>행사 알림 동의</span>
                    <Checkbox value="A" className="w-6 h-6 flex items-center justify-center" />
                </div>
                <div className='flex justify-between bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[16px] text-[#333]'>혜택 알림 동의</span>
                    <Checkbox value="A" className="w-6 h-6 flex items-center justify-center" />
                </div>
                <div className='flex justify-between bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[16px] text-[#333]'>광고 알림 동의</span>
                    <Checkbox value="A" className="w-6 h-6 flex items-center justify-center" />
                </div>
            </div>

            <div className='border-t border-t-[#E9ECF5] mb-3'>
                <div className='bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[#828282]'>버전정보</span>
                </div>
                <div className='flex justify-between bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[16px] text-[#333]'>V 0.8</span>
                    <button className='h-6 w-6'>
                        <img src={Arrow} alt="arrow" />
                    </button>
                </div>
                <div className='flex justify-between bg-white p-4 border-b border-b-[#E9ECF5]'>
                    <span className='text-[16px] text-[#333]'>오픈소스 라이센스</span>
                    <button className='h-6 w-6'>
                        <img src={Arrow} alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Setting;
