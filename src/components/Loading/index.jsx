import Logo from '../../assets/svgs/logo.svg';
import Typo from '../../assets/svgs/typo.svg';
const Loading = () => {
    return <div className="flex flex-col items-center justify-between py-8 h-[100vh]">
        <div className="text-lg font-semibold flex gap-x-[4px]">
            <span className="text-[#00AEEF]">장애인</span>
            <span className="text-[#EC008C]">길안내</span>
            <span className="text-[#2E3192]">서비스</span>
        </div>
        <div className="m-auto">
            <img src={Logo} alt="" />
        </div>
        <div>
            <img src={Typo} alt="" />
        </div>
    </div>;
};

export default Loading;