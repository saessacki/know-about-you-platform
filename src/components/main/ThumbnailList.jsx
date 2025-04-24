import {useEffect, useState} from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { base_url } from '../../App';

function ThumbnailList({lang}){
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);

    useEffect(()=>{
        const currentLanguage = searchParams.get("lang") || 'Kor';
        const currentCategory = searchParams.get("cat");
        console.log('currentLanguage : ',currentLanguage);
        console.log('currentCategory : ',currentCategory);
        if(currentCategory){
            const filteredTests = TESTS.filter((test) => (
                test?.info?.lang === currentLanguage && test?.info?.category === currentCategory
            ))
            console.log('currentCategory: ',currentCategory);
            setTestList(filteredTests);
        } else {
            const filteredTests = TESTS.filter(
                (test) => test?.info?.lang === currentLanguage
            );
            console.log('filteredTests: ',filteredTests);
            setTestList(filteredTests);
        }
        
    },[searchParams])

    return(
    <div>
        {testList?.map((test) => (
            <Link
                to={`${base_url}/${test?.info?.mainUrl}`}
                key={test?.info?.mainUrl}
            >
                <img
                    style={{width: "100%"}}
                    src={test?.info?.thumbImage} 
                    alt={test?.info?.mainUrl} 
                />
            </Link>
            ))
        }
    </div>
    );
}

export default ThumbnailList;