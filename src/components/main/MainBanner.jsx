import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(135, 206, 235, 0.8),
                 0 0 20px rgba(0, 191, 255, 0.8),
                 0 0 30px rgba(30, 144, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(135, 206, 235, 0.9),
                 0 0 30px rgba(0, 191, 255, 0.9),
                 0 0 40px rgba(30, 144, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(135, 206, 235, 0.8),
                 0 0 20px rgba(0, 191, 255, 0.8),
                 0 0 30px rgba(30, 144, 255, 0.8);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const BannerContainer = styled.div`
  padding: 2.5rem 1.5rem;
  background: linear-gradient(45deg, 
    #87CEEB, /* 하늘색 */
    #00BFFF, /* 딥스카이블루 */
    #1E90FF, /* 도저블루 */
    #4169E1  /* 로얄블루 */
  );
  background-size: 300% 300%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 20px;
  margin: 1.5rem 1rem;
  box-shadow: 0 8px 20px rgba(30, 144, 255, 0.15);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 1rem 0.5rem;
    border-radius: 15px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    transform: skewX(-15deg);
    transform-origin: 0 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin: 0;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.95;
  line-height: 1.4;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.8rem;
    line-height: 1.3;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.5rem;
  color: white;
  font-size: 1rem;
  opacity: 0.9;
  
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-top: 1.2rem;
    font-size: 0.9rem;

    p {
      gap: 0.3rem;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  p {
    margin: 0.3rem 0;
    color: white;
    font-size: 0.9rem;
    opacity: 0.9;
    text-align: center;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.2rem;
    padding-top: 0.8rem;
    
    p {
      font-size: 0.8rem;
    }
  }
`;

function MainBanner() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState('Kor');

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || 'Kor';
    setLanguage(currentLanguage);
  }, [searchParams]);

  const foreignTextsObject = {
    Kor: {
      title: "테스트코코",
      subtitle: "나의 또 다른 모습을 찾는 심리테스트",
      description1: "✨ MBTI, 연애, 성격 테스트",
      description2: "🌟 아이돌, 애니메이션 세계관 테스트",
      description3: "💫 테스트코코를 통해 당신의 숨겨진 매력을 발견하세요",
      advertising: "광고 및 후원 문의",
      email: "testkoko88@gmail.com",
    },
    Eng: {
      title: "TESTKOKO",
      subtitle: "Find your other self with psychological tests",
      description1: "✨ MBTI, Love, Personality Test",
      description2: "🌟 Idol, Animation World Test",
      description3: "💫 Discover your hidden charm through TESTKOKO",
      advertising: "Advertising and Sponsorshop Contact",
      email: "testkoko88@gmail.com",
    },
    Jp: {
      title: "テストココ",
      subtitle: "心理テストで自分の他の姿を見つける",
      description1: "✨ MBTI, 恋愛, 性格テスト",
      description2: "🌟 アイドル, アニメショーの世界テスト",
      description3: "💫 テストココであなたの隠れた魅力を発見してください",
      advertising: "広告およびスポンサーシップのお問い合わせ",
      email: "testkoko88@gmail.com",
    },
  };

  return (
    <BannerContainer>
      <Title>{foreignTextsObject[language]?.title}</Title>
      <Subtitle>{foreignTextsObject[language]?.subtitle}</Subtitle>
      <Description>
        <p>{foreignTextsObject[language]?.description1}</p>
        <p>{foreignTextsObject[language]?.description2}</p>
        <p>{foreignTextsObject[language]?.description3}</p>
      </Description>
      <ContactInfo>
        <p>{foreignTextsObject[language]?.advertising}</p>
        <p>{foreignTextsObject[language]?.email}</p>
      </ContactInfo>
    </BannerContainer>
  );
}

export default MainBanner;