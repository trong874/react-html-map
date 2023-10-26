import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/svgs/arrow-left.svg';
const NavigateHeader = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 right-0 border-b border-b-[#E9ECF5] p-4 h-[56px]">
            <button className='absolute left-4 top-4 h-6 w-6' onClick={() => navigate(-1)}>
                <img src={ArrowLeft} alt="" />
            </button>
            <span className="block text-lg font-normal text-center">{title}</span>
        </div>
    )
}

export default NavigateHeader;