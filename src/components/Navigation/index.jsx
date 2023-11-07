import Icons from '@/assets/svgs';
import { Link } from "react-router-dom";

const Navigation = () => {
    return <nav className="nav-custom">
        <ul className="bg-white h-[70px] flex gap-x-11">
            <li className="flex flex-col items-center gap-y-1">
                <Link to="/home">
                    <img src={Icons.Home} alt="" />
                </Link>
                <span className="text-[12px] text-[#4F4F4F]">홈</span>
            </li>
            <li className="flex flex-col items-center gap-y-1">
                <Link to="">
                    <img src={Icons.QuestionCircle} alt="" />
                </Link>
                <span className="text-[12px] text-[#4F4F4F]">문의</span>
            </li>
            <li className="flex flex-col items-center gap-y-1">
                <Link to="/drive">
                    <img src={Icons.Phone} alt="" />
                </Link>
                <span className="text-[12px] text-[#4F4F4F]">통화</span>
            </li>
            <li className="flex flex-col items-center gap-y-1">
                <Link to="">
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
}
export default Navigation;
