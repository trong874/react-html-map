import ButtonBottom from "@/components/ButtonBottom";
import LogoRounded from "@/assets/svgs/logo-rounded.svg";
import Splash from "@/components/Splash";
import { useState, useEffect } from "react";
const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>{
            loading ? <Splash /> : (
                <div className="flex flex-col items-center h-[100vh]">
                    <div className="flex items-center justify-center mt-[192px]">
                        <div className="bg-[#9069ff1a] w-[142px] h-[142px] rounded-full flex items-center justify-center">
                            <div className="bg-[#9069ff2e] w-[110px] h-[110px] rounded-full flex items-center justify-center">
                                <img src={LogoRounded} alt="" />
                            </div>
                        </div>
                    </div>
                    <span className="block mt-[52px] px-[50px] text-center text-[21px] font-semibold">
                        마이프렌드를 사용하기 위해서는
                        사용자 등록이 필요합니다.
                    </span>
                    <ButtonBottom to="/register">사용자 등록</ButtonBottom>
                </div>)
        }</>
    )
}

export default Home;