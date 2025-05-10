import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TestResultRenderer from '../components/testResult/TestResultRenderer';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import {TESTS} from '../data/TESTS.js';
import GoToHomeButton from '../components/test/GoToHomeButton.jsx';
import BlogButton from '../components/testResult/BlogButton.jsx';
import TestResultMetatagRenderer from '../components/metatagRenderer/TestResultMetatagRenderer.jsx';
import CoupangDynamicBanner from '../components/CoupangDynamicBanner.jsx';

function TestResult(){
    const navigate = useNavigate();
    const { testParam, resultParam } = useParams();
    const [renderResultInfo, setRenderResultInfo] = useState({});
    const [renderTestInfo, setRenderTestInfo] = useState({});

    useEffect(()=>{
        const testInfo = TESTS.find((test) => (test.info.mainUrl === testParam));
        if(!testInfo) {
            alert("존재하지 않는 테스트입니다!");
            navigate("/");
        }
        
        setRenderTestInfo(testInfo);

        const resultInfo = testInfo?.results?.find((result)=>(
            result.query === resultParam
        ))
        if(!resultInfo){
            alert("존재하지 않는 결과값입니다!");
            navigate(`/${testInfo?.info?.mainUrl}`);
        }
        setRenderResultInfo(resultInfo);
    },[testParam, resultParam]);
    return (
        <div>
            <TestResultMetatagRenderer 
                testParam={testParam}
                resultParam={resultParam}
                renderTestInfo={renderTestInfo}
            />
            <TestResultRenderer
                renderResultInfo={renderResultInfo}
                lang={renderTestInfo?.info?.lang}
            />
            <ShareButtonGroup
                testParam={testParam}
                resultParam={resultParam}
                renderTestInfo={renderTestInfo}
                lang={renderTestInfo?.info?.lang}
            />
            <CoupangDynamicBanner unit={"resultBanner"}/>
            <BlogButton
                testParam={testParam}
                lang={renderTestInfo?.info?.lang}
            />
            <ResultButtonGroup
                testParam={testParam}
                resultParam={resultParam}
                renderTestInfo={renderTestInfo}
                lang={renderTestInfo?.info?.lang}
            />
            <ResultThumbnailList testParam={testParam}/>
            <GoToHomeButton page="Result"/>
        </div>
    );
}

export default TestResult;

//TestResult 페이지까지 오는 방법 2가지
//1. Intro -> Quiz -> Loading -> Result
//2. 친구에게 공유 : 링크를 통해 결과 페이지로 Direct로 들어오는 경우
