import IntroButtonGroup from './IntroButtonGroup';
import KakaoAdfit from '../KakaoAdfit';
import GoToHomeButton from './GoToHomeButton';
import { eventSenderGA } from "../../tools/tools"
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import styled from 'styled-components';

const IntroContainer = styled.div`
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 0.1rem;
  }
`;

const Title = styled.h1`
  margin: 1.5rem 0 0.5rem;
  word-break: keep-all;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
`;

const SubTitle = styled.h3`
  margin: 0.5rem 0 1.5rem;
  word-break: keep-all;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const IntroImage = styled.img`
  width: 100%;
  max-width: 768px;
  height: auto;
  aspect-ratio: 1.2 / 1;
  object-fit: contain;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    width: calc(100% - 1.6rem);
    margin: 0 auto;
    aspect-ratio: 1 / 1;
  }
`;

const StartButton = styled.button`
  background-color: brown;
  color: white;
  width: 14rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin: 1.5rem 0;
  transition: all 0.2s ease;

  &:hover {
    background-color: #8b0000;
  }

  @media (max-width: 768px) {
    width: 80%;
    max-width: 12rem;
    height: 3.5rem;
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  word-break: keep-all;
  padding: 0 1rem;

  span {
    font-weight: bold;
    color: brown;
  }
`;

function Intro({info, setMode}) {
  const onImageClick = () => {
    //이미지 클릭 시 mode가 quiz로 변경되면서 퀴즈 페이지로 이동
    eventSenderGA(
      "Paging",
      "Test Start Button",
      "Intro"
    )
    setMode("quiz");
  }
  
  const foreignTextsObject = {
    Kor : {
      startButton : "시작하기",
      comment : "로 여러분의 성향을 테스트해보세요"
    },
    Eng : {
      startButton : "START",
      comment : " to test yout personality!"
    },
    Jp : {
      startButton : "スタート",
      comment : "であなたの性格をテストしてみましょう"
    },
  } 

  return (
    <IntroContainer>
      <Title>{info?.mainTitle}</Title>
      <SubTitle>{info?.subTitle}</SubTitle>
      <IntroImage
        src={info?.mainImage} 
        alt={info?.mainTitle}
        onClick={onImageClick}
      />
      <KakaoAdfit />
      <CoupangDynamicBanner unit={"introBanner"}/>
      <StartButton onClick={onImageClick}>
        {info && foreignTextsObject[info?.lang].startButton}
      </StartButton>
      <Description>
        <span>{info?.mainTitle}</span>
        {info && foreignTextsObject[info?.lang].comment}
      </Description>
      <IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang}/>
      <GoToHomeButton page="Intro"/>
    </IntroContainer>
  )
}

export default Intro