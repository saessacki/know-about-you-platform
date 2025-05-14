import {useEffect, useState} from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { base_url } from '../../App';
import { FloatButton, Skeleton } from 'antd';
import { eventSenderGA } from '../../tools/tools';
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(135, 206, 235, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #87CEEB, #ff79b0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  &.top {
    top: 15px;
  }
  
  &.bottom {
    bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    
    &.top {
      top: 10px;
    }
    
    &.bottom {
      bottom: 10px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
  padding-top: 80.67%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  margin: 0 auto;
  background: linear-gradient(
    45deg,
    #f5f5f5,
    #ffffff,
    #f5f5f5
  );
  background-size: 200% auto;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: 0.5s;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 85%;
    border-radius: 12px;
    animation: ${pulse} 2s infinite ease-in-out;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(135, 206, 235, 0.4);

    &::before {
      left: 100%;
    }

    img {
      transform: translate(-50%, -50%) scale(1.05);
      filter: brightness(1.05);
    }

    ${CategoryText} {
      background: linear-gradient(45deg, #ff4081, #ff79b0);
      -webkit-background-clip: text;
      background-clip: text;
      transform: translateX(-50%) scale(1.1);
    }

    @media (max-width: 768px) {
      transform: scale(1.02);
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 85%;
    object-fit: contain;
    object-position: center;
    transition: all 0.4s ease;
    filter: brightness(1);
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
    gap: 1rem;
  }
`;

const ThumbnailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

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
    <ThumbnailContainer>
        {testList ? (
            testList?.map((test,idx) => (
                <ThumbnailItem key={test?.info?.mainUrl}>
                    <Link
                        to={`${base_url}/${test?.info?.mainUrl}`}
                        style={{ width: '100%' }}
                    >
                        <ImageContainer>
                            <CategoryText className="top">
                                {test?.info?.category || 'TEST'}
                            </CategoryText>
                            <img
                                src={test?.info?.thumbImage} 
                                alt={test?.info?.mainUrl} 
                            />
                            <CategoryText className="bottom">
                                {test?.info?.category || 'TEST'}
                            </CategoryText>
                        </ImageContainer>
                    </Link>
                    {idx % 2 === 0 && <CoupangDynamicBanner unit={"introBanner"} />}
                </ThumbnailItem>
            )) 
        ) : (
            <Skeleton active style={{height: "20rem"}}/>
        )}
            <FloatButton.BackTop visibilityHeight={400} onClick={onBackToTopButtonClick}/>
    </ThumbnailContainer>
    );
}

export default ThumbnailList;