import NavigateHeader from "@/components/NavigateHeader";
import {Link} from "react-router-dom";

const About = () => {
    return <div className="pt-[56px]">
        <NavigateHeader title="휴대폰 번호"/>
        <div className="flex flex-col items-center mt-[55px]">
            <p className="text-[24px]">현재버전 V0.8.1</p>
            <p className="text-[#828282] text-[16px] mt-[18px]">현재 최신 버전입니다.</p>

            <Link to="" className="px-6 py-[18px] border border-[#9069FF] rounded w-[200px] text-center mt-[55px]">
                <span className="text-[#9069FF] text-[15px]">업데이트</span>
            </Link>
        </div>
    </div>
}

export default About;
