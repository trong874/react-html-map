import NavigateHeader from "@/components/NavigateHeader";
import Svgs from '@/assets/svgs';
import { InputGroup, Input } from 'rsuite';
import { useState } from "react";
import CloseIcon from '@/assets/svgs/CloseIcon';
import SearchIcon from "@/assets/svgs/SearchIcon";
import { Link } from "react-router-dom";
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
];
const results = [
    {
        title: '서울역 1호선 앞',
        description: '서울 용산구 한강대로 405',
        distance: '2.2km',
    },
    {
        title: '서울역 1호선 앞',
        description: '서울 용산구 한강대로 405',
        distance: '2.4km',
    },
    {
        title: '서울역 1호선 앞',
        description: '서울 용산구 한강대로 405',
        distance: '2.6km',
    },
    {
        title: '서울역 1호선 앞',
        description: '서울 용산구 한강대로 405',
        distance: '2.8km',
    },
];
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
    const [showResult, setShowResult] = useState(false);
    return (
        <div className="pt-[56px]">
            <NavigateHeader title="목적지 검색" />
            <div className="px-3 pt-7">
                <InputGroup className="input-group-search" inside>
                    <Input
                        value={keyword}
                        onChange={value => {
                            setShowResult(false);
                            setKeyword(value);
                        }}
                        placeholder="목적지를 입력하세요."
                    />
                    {
                        keyword
                            ? <InputGroup.Button onClick={() => {
                                setKeyword('');
                                setShowResult(false)
                            }}>
                                <img className="w-6 h-6" src={Svgs.CloseCircle} alt="" />
                            </InputGroup.Button>
                            : <InputGroup.Button>
                                <img className="w-6 h-6" src={Svgs.Search} alt="" />
                            </InputGroup.Button>
                    }
                    {
                        (keyword && !showResult) && <ul className="flex-1 mb-0">
                            {
                                suggestions.map(suggest => {
                                    return <li
                                        className="flex justify-between items-center border-b border-b-[#E9ECF5] p-4"
                                        key={suggest.id}
                                        onClick={() => setShowResult(true)}
                                    >
                                        <span className="tetx-[16px]">{suggest.title}</span>
                                        <SearchIcon color='#BDBDBD' />
                                    </li>
                                })
                            }
                        </ul>
                    }
                </InputGroup>
                {(!keyword && !showResult) && <>
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
                                    <span className="tetx-[16px]"
                                        onClick={() => {
                                            setKeyword('서울역');
                                            setShowResult(true);
                                        }}
                                    >{history.keyword}</span>
                                    <button onClick={() => setHistories(pre => ([...pre.filter(record => record.id !== history.id)]))}>
                                        <CloseIcon fill='#828282' />
                                    </button>
                                </li>)
                            })
                        }
                    </ul>
                </>}
                {
                    showResult && <ul>
                        {
                            results.map((result, index) => {
                                return (<li
                                    className="flex justify-between items-center border-b border-b-[#E9ECF5] py-4"
                                    key={index}
                                >
                                    <Link to='/guide' className="flex gap-x-[6px]">
                                        <img src={Svgs.Location} alt="" />
                                        <div className="flex flex-col gap-y-2">
                                            <span className="text-[16px] text-[#333]">
                                                {result.title}
                                            </span>
                                            <span className="text-[12px] text-[#828282]">
                                                {result.description}
                                            </span>
                                        </div>
                                    </Link>
                                    <span className="font-bold text-[16px] text-[#796BAF]">{result.distance}</span>
                                </li>)
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Search;
