import IntroButtonGroup from './IntroButtonGroup';
import KakaoAdfit from '../KakaoAdfit';
import GoToHomeButton from './GoToHomeButton';
import { eventSenderGA } from "../../tools/tools"
import CoupangDynamicBanner from '../CoupangDynamicBanner';

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
    <div>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        style={{width : "100%", cursor:"pointer"}}
        src={info?.mainImage} 
        alt={info?.mainTitle}
        onClick={onImageClick}
      />
      <KakaoAdfit />
      <CoupangDynamicBanner unit={"introBanner"}/>
      <button 
        style={{
          backgroundColor: "brown",
          color: "white",
          width: "14rem",
          height: "4rem",
          border: "none",
          borderRadius: "1rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={onImageClick}>
        {info && foreignTextsObject[info?.lang].startButton}
      </button>
      <p>
        <span style={{fontWeight : "bold", color : "brown"}}>{info?.mainTitle}</span>
        {info && foreignTextsObject[info?.lang].comment}
      </p>
      <IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang}/>
      <GoToHomeButton page="Intro"/>
    </div>
  )
}

export default Intro