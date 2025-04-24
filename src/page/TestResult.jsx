import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TestResultRenderer from '../components/testResult/TestResultRenderer';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import {TESTS} from '../data/TESTS.js';

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

        console.log(testInfo);
        const resultInfo = testInfo?.results?.find((result)=>(
            result.query === resultParam
        ))
        if(!resultInfo){
            alert("존재하지 않는 결과값입니다!");
            navigate(`/${testInfo?.info?.mainUrl}`);
        }
        console.log('resultInfo',resultInfo);
        setRenderResultInfo(resultInfo);
    },[testParam, resultParam]);
    return (
        <div>
            <TestResultRenderer renderResultInfo={renderResultInfo}/>
            <ShareButtonGroup
                testParam={testParam}
                resultParam={resultParam}
                renderTestInfo={renderTestInfo}
            />
            <ResultButtonGroup
                testParam={testParam}
                resultParam={resultParam}
            />
            <ResultThumbnailList />
        </div>
    );
}

export default TestResult;

//TestResult 페이지까지 오는 방법 2가지
//1. Intro -> Quiz -> Loading -> Result
//2. 친구에게 공유 : 링크를 통해 결과 페이지로 Direct로 들어오는 경우
