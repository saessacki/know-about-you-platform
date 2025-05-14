import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { eventSenderGA } from "../../tools/tools";

function GoAnotherTestBtn({testParam, resultParam, lang}){

  const navigate = useNavigate();
  const foreignTextsObject = {
    Kor : {
      goHome : "다른 테스트 하러 가기",
    },
    Eng : {
      goHome : "Go to other Tests",
    },
    Jp : {
      goHome : "他のテストをしに行く",
    }
  }


  const onClickGoHomeButton = () => {
    eventSenderGA("Paging","Go-Home Button","Result");
    navigate("/");
  }

  return(
    <div>
      <button 
        onClick={onClickGoHomeButton}
      >
        <HomeOutlined />
        <span>{lang && foreignTextsObject[lang]?.goHome}</span>
      </button>
    </div>
  )
}

export default GoAnotherTestBtn;