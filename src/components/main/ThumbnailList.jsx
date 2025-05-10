import {useEffect, useState} from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { base_url } from '../../App';
import { FloatButton, Skeleton } from 'antd';
import { eventSenderGA } from '../../tools/tools';
import CoupangDynamicBanner from '../CoupangDynamicBanner';

function ThumbnailList({lang}){
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);

    useEffect(()=>{
        const currentLanguage = searchParams.get("lang") || 'Kor';
        const currentCategory = searchParams.get("cat");
        if(currentCategory){
            const filteredTests = TESTS.filter((test) => (
                test?.info?.lang === currentLanguage && test?.info?.category === currentCategory
            ))
            setTestList(filteredTests);
        } else {
            const filteredTests = TESTS.filter(
                (test) => test?.info?.lang === currentLanguage
            );
            setTestList(filteredTests);
        }        
    },[searchParams])

    const onBackToTopButtonClick = () => {
        eventSenderGA("BackToTop","BackToTopButton","MainPage");
    }

    return(
    <div>
        {testList ? (
            testList?.map((test,idx) => (
                <div key={test?.info?.mainUrl}>
                    <Link
                        to={`${base_url}/${test?.info?.mainUrl}`}
                    >
                        <img
                            style={{width: "27rem", height:"18rem"}}
                            src={test?.info?.thumbImage} 
                            alt={test?.info?.mainUrl} 
                        />
                    </Link>
                    {idx % 2 === 0 && <CoupangDynamicBanner unit={"introBanner"} />}
                </div>
            )) 
        ) : (
            <Skeleton active style={{height: "20rem"}}/>
        )}
            <FloatButton.BackTop visibilityHeight={400} onClick={onBackToTopButtonClick}/>
    </div>
    );
}

export default ThumbnailList;