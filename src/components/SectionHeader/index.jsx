import Svgs from '@/assets/svgs';
const SectionHeader = () => {
    return (
        <div className="section-header">
            <img src={Svgs.LogoHeader} alt=""/>
            <div className="flex gap-x-4">
                <a href="">
                    <img src={Svgs.Notice} alt=""/>
                </a>
                <a href="">
                    <img src={Svgs.Setting} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default SectionHeader
