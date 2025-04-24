import React from 'react'
import IntroButtonGroup from './IntroButtonGroup';

function Intro({info, setMode}) {

  const onImageClick = () => {
    //이미지 클릭 시 mode가 quiz로 변경되면서 퀴즈 페이지로 이동
    setMode("quiz");
  }

  return (
    <div>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img 
        //cursor : "pointer" -> a태그가 아닌 이상 마우스 커서를 올리면 손가락 모양으로 안바뀐다. 그래서 이 속성 추가
        style={{width : "100%", cursor:"pointer"}}
        src={info?.mainImage} 
        alt={info?.mainTitle}
        onClick={onImageClick}
        //onClick={()=> setMode("quiz")}
      />
      <p><span style={{fontWeight : "bold", color : "brown"}}>{info?.mainTitle}</span>로 여러분을 성향을 테스트해보세요!</p>
      <IntroButtonGroup/>
    </div>
  )
}

export default Intro