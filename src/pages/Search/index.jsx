import NavigateHeader from "@/components/NavigateHeader";
import Svgs from '@/assets/svgs';
import { InputGroup, Input } from 'rsuite';
import { useState } from "react";
import CloseIcon from '@/assets/svgs/CloseIcon';
import SearchIcon from "@/assets/svgs/SearchIcon";
const suggestions = [
    {
        id: 1, title: '서울역 1호선 앞',
    },
    {
        id: 2, title: '서울역 CU점',
    },
    {
        id: 3, title: '서울역 건널목',
    },
]
const Search = () => {
    const [histories, setHistories] = useState([
        {
            id: 1, keyword: '서울역 1호선 앞',
        },
        {
            id: 2, keyword: '왕십리 77번길',
        },
        {
            id: 3, keyword: '서울역 CU 편의점',
        },
        {
            id: 4, keyword: '서울숲 매표소 앞',
        },
        {
            id: 5, keyword: '현대백화점 아울렛 정문 앞',
        },
    ])
    const [keyword, setKeyword] = useState('');
    return (
        <div className="pt-[56px]">
            <NavigateHeader title="목적지 검색" />
            <div className="px-3 pt-7">
                <InputGroup className="input-group-search" inside>
                    <Input
                        value={keyword}
                        onChange={value => setKeyword(value)}
                        placeholder="목적지를 입력하세요."
                    />
                    {
                        keyword
                            ? <InputGroup.Button onClick={() => setKeyword('')}>
                                <img src={Svgs.CloseCircle} alt="" />
                            </InputGroup.Button>
                            : <InputGroup.Button>
                                <img src={Svgs.Search} alt="" />
                            </InputGroup.Button>
                    }
                    {
                        keyword && <ul className="flex-1 mb-0">
                            {
                                suggestions.map(suggest => {
                                    return <li
                                    className="flex justify-between items-center border-b border-b-[#E9ECF5] p-4"
                                    key={suggest.id}
                                >
                                    <span className="tetx-[16px]">{suggest.title}</span>
                                    <button onClick={() => {}}>
                                        <SearchIcon color='#BDBDBD' />
                                    </button>
                                </li>
                                })
                            }
                        </ul>
                    }
                </InputGroup>
                {!keyword && <>
                    <div className="my-[18px]">
                        <span className="text-[12px]">최근검색</span>
                    </div>
                    <ul>
                        {
                            histories.map(history => {
                                return (<li
                                    className="flex justify-between items-center border-b border-b-[#E9ECF5] py-4"
                                    key={history.id}
                                >
                                    <span className="tetx-[16px]">{history.keyword}</span>
                                    <button onClick={() => setHistories(pre => ([...pre.filter(record => record.id !== history.id)]))}>
                                        <CloseIcon fill='#828282' />
                                    </button>
                                </li>)
                            })
                        }
                    </ul>
                </>}
            </div>
        </div>
    )
}

export default Search;
