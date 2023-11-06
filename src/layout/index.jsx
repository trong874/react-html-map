import Navigation from "@/layout/Navigation";
const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Navigation />
        </>
    )
}

export default Layout;