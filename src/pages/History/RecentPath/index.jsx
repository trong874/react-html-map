import Svgs from "@/assets/svgs";

const RecentPath = () => <div className="px-4">
    <span className="text-[#828282] my-[20px] block">즐겨찾기</span>
    <ul className="mb-8">
        <li className="flex justify-between py-4 border-b border-b-[#E9ECF5]">
            <span className="text-[16px]">종각삼거리 - 선릉역</span>
            <Svgs.StarIcon color="#EFC92B" />
        </li>
        <li className="flex justify-between py-4 border-b border-b-[#E9ECF5]">
            <span className="text-[16px]">종각삼거리 - 선릉역</span>
            <Svgs.StarIcon color="#EFC92B" />
        </li>
    </ul>
    <span className="text-[#828282] my-[20px] block">최근이용 경로</span>
    <ul className="mb-8">
        <li className="flex justify-between py-4 border-b border-b-[#E9ECF5]">
            <span className="text-[16px]">종각삼거리 - 선릉역</span><div className="flex gap-x-3">
            <img src={Svgs.Trash} alt=""/>
            <Svgs.StarIcon color="#E0E0E0" />
        </div>

        </li>
        <li className="flex justify-between py-4 border-b border-b-[#E9ECF5]">
            <span className="text-[16px]">종각삼거리 - 선릉역</span>
            <div className="flex gap-x-3">
                <img src={Svgs.Trash} alt=""/>
                <Svgs.StarIcon color="#E0E0E0" />
            </div>
        </li>
    </ul>
</div>

export default RecentPath;
