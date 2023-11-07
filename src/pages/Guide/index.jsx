import MapImage from '@/assets/images/map-pin.png';
import NavigateHeader from '@/components/NavigateHeader';

const Guide = () => {
    return <div className="pt-[56px]">
        <NavigateHeader title="목적지 검색" />
        <div className="relative w-full h-[350px] p-3" style={{ backgroundImage: `url(${MapImage})` }} />
        <div className='px-4'>
            <div className='pt-[18px] pb-[20px] border-b border-b-[#E9ECF5] flex justify-between items-end'>
                <div className='flex flex-col'>
                    <span className='text-[12px] text-[#796BAF]'>추천</span>
                    <span className='text-[24px] text-[#796BAF] font-bold'>24분</span>
                </div>
                <div className='flex flex-col'>
                    <span />
                    <span className='text-[16px] text-[#796BAF] font-bold'>2.2km</span>
                </div>
            </div>
            <div className='pt-[18px] pb-[20px] border-b border-b-[#E9ECF5] flex justify-between items-end'>
                <div className='flex flex-col'>
                    <span className='text-[12px]'>추천</span>
                    <span className='text-[24px] font-bold'>24분</span>
                </div>
                <div className='flex flex-col'>
                    <span />
                    <span className='text-[16px] font-bold'>2.2km</span>
                </div>
            </div>
        </div>
    </div>
}

export default Guide;
