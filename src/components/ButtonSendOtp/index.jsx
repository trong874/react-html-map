const ButtonSendOtp = ({ text }) => {
    return (
        <button className="block w-full px-3 py-[18px] border border-[#2F80ED] rounded-[6px] bg-white">
            <span className="text-[15px]">{text}</span>
        </button>
    )
}
export default ButtonSendOtp;
