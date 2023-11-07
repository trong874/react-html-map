import Svgs from '@/assets/svgs';
import { Link } from 'react-router-dom';
const SectionHeader = () => {
    return (
        <div className="section-header">
            <img src={Svgs.LogoHeader} alt=""/>
            <div className="flex gap-x-4">
                <Link to="/notice">
                    <img src={Svgs.Notice} alt=""/>
                </Link>
                <Link to="/setting">
                    <img src={Svgs.Setting} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default SectionHeader
