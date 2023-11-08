import Icons from '@/assets/svgs';
import { useState } from 'react';

const data = [
    {
        key: '1',
        label: '휠체어',
        icon: Icons.Wheelchair,
    },
    {
        key: '2',
        label: '전동휠체어',
        icon: Icons.ElectricWheelchair,
    },
    {
        key: '3',
        label: '충전소',
        icon: Icons.ChargingStation,
    },
    {
        key: '4',
        label: '배터리 교환',
        icon: Icons.BatteryReplacement,
    },
    {
        key: '5',
        label: '시각 장애인',
        icon: Icons.VisuallyImpaired,
    },
    {
        key: '6',
        label: '수화통역',
        icon: Icons.Interpretation,
    },
];
const Service = () => {
    const [select, setSelect] = useState([]);
    const handleChecked = (item) => {
        const existed = select.filter(record => record.key === item.key).length;
        if (existed) {
            setSelect(pre => [
                ...pre.filter(record => record.key !== item.key)
            ])
        } else {
            setSelect(pre => [
                ...pre,
                item
            ])
        }
    }
    return (
        <div className="px-7">
            <div className="mx-auto mt-[70px] mb-16">
                <h4 className="text-center text-[21px] font-semibold mb-1">원하시는 서비스를 선택해주세요.</h4>
                <div className="text-center text-[12px] text-[#796BAF]">현재는 휠체어 서비스만 이용가능합니다.</div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {
                    data.map(item => {
                        const existed = select.filter(record => record.key === item.key).length;
                        return !existed
                            ? (<div
                                className="bg-[#E9ECF5] w-[140px] h-[128px] rounded-[6px] px-3 py-6 justify-between"
                                onClick={() => handleChecked(item)}
                                key={item.key}
                            >
                                <div className=" flex flex-col items-center">
                                    <span className='text-[#8781BD] text-[16px] font-bold'>{item.label}</span>
                                    <img className='w-[50px] h-[50px]' src={item.icon} alt='' />
                                </div>
                            </div>)
                            : (<div
                                className="bg-white w-[140px] h-[128px] rounded-[6px] px-3 py-6 justify-between border-2 border-[#9069FF]"
                                onClick={() => handleChecked(item)}
                                key={item.key}
                            >
                                <div className="flex flex-col items-center service-selected">
                                    <span className='text-[#9069FF] text-[16px] font-bold'>{item.label}</span>
                                    <img className='w-[50px] h-[50px]' src={item.icon} alt='' />
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Service;
