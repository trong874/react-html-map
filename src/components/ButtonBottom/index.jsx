import { Link } from "react-router-dom";
const ButtonBottom = ({ children, className, ...props }) => {
    return (
        <Link className={"fixed bottom-0 left-0 right-0 bg-[#8781BD] px-3 py-6 text-center"} {...props}>
            <span className="text-white text-lg font-semibold">{children}</span>
        </Link>
    )
}
export default ButtonBottom;