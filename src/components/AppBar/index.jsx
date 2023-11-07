import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/assets/svgs/CloseIcon';
const AppBar = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 right-0 border-b border-b-[#E9ECF5] p-4 h-[56px] z-[100] bg-white">
            <button className='absolute right-4 top-4 h-6 w-6' onClick={() => navigate(-1)}>
                <CloseIcon fill='#333' />
            </button>
            <span className="block text-lg font-normal text-center">{title}</span>
        </div>
    )
}

export default AppBar;