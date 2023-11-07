import NavigateHeader from "@/components/NavigateHeader";
import {PanelGroup, Panel, Placeholder} from "rsuite";

const notices = [
    {
        id: 1,
        title: '[안내] 가입시 유의사항 안내',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <div className="mb-6">연휴기간 시스템 점검이 예정중입니다. <br/> 서비스 이용에 착오 없으시기 바랍니다.</div>
                <div className="font-bold mb-6">예정: 오후 11 부터 12시까지 1시간 예정</div>
                <div>앞으로도 더 나은 마이프렌스 서비스를 약속드립니다.</div>
            </div>
        },
        time: '2023-10-18',
    },
    {
        id: 2,
        title: '[안내] 가입시 유의사항 안내',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <span className="mb-6">연휴기간 시스템 점검이 예정중입니다. <br/> 서비스 이용에 착오 없으시기 바랍니다.</span>
                <span className="font-bold mb-6">예정: 오후 11 부터 12시까지 1시간 예정</span>
                <span>앞으로도 더 나은 마이프렌스 서비스를 약속드립니다.</span>
            </div>
        },
        time: '2023-10-18',
    },
    {
        id: 3,
        title: '[안내] 가입시 유의사항 안내',
        content: () => {
            return <div className="bg-[#F4F5F9] px-4 py-6">
                <span className="mb-6">연휴기간 시스템 점검이 예정중입니다. <br/> 서비스 이용에 착오 없으시기 바랍니다.</span>
                <span className="font-bold mb-6">예정: 오후 11 부터 12시까지 1시간 예정</span>
                <span>앞으로도 더 나은 마이프렌스 서비스를 약속드립니다.</span>
            </div>
        },
        time: '2023-10-18',
    },
];
const Notice = () => {
    const NoticeHeader = ({notice}) => {
        return <div className="flex flex-col gap-y-[10px]">
            <span className="text-[16px]">{notice.title}</span>
            <span className="text-[#828282] text-[12px]">{notice.time}</span>
        </div>
    }
    return <div className="pt-[56px]">
        <NavigateHeader title="공지사항"/>
        <PanelGroup accordion>
            {
                notices.map(notice => {
                    return <Panel header={<NoticeHeader notice={notice} />} key={notice.id}>
                        <notice.content />
                    </Panel>
                })
            }
        </PanelGroup>
    </div>
}

export default Notice;
