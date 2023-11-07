import NavigateHeader from "@/components/NavigateHeader";
import {Nav} from "rsuite";
import {useState} from "react";
import RecentPath from "@/pages/History/RecentPath";
import BlackBox from "@/pages/History/BlackBox";
const navItems = [
    { eventKey: 'recent-path', label: '최근 경로' },
    { eventKey: 'black-box', label: '블랙박스' },
];
const History = () => {
    const [navActive, setNavActive] = useState('recent-path');
    return <div className="pt-[56px]">
        <NavigateHeader title="마이메뉴"/>
        <Nav appearance="subtle" activeKey={navActive} onSelect={setNavActive}>
            {navItems.map(nav => {
                return <Nav.Item className="px-4 py-[18px] text-[16px]" eventKey={nav.eventKey} key={nav.eventKey}>
                    {nav.label}
                </Nav.Item>
            })}
        </Nav>
        {
            navActive === 'recent-path' && <RecentPath />
        }
        {
            navActive === 'black-box' && <BlackBox />
        }
    </div>
}

export default History;
