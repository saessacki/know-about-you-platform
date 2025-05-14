import {HomeOutlined, LinkOutlined, RedoOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import {base_url} from "../../App"
import { eventSenderGA } from "../../tools/tools"


function ResultButtonGroup({testParam, resultParam, lang}){
  
  const navigate = useNavigate();
  const [copiedText, copy]=useCopyToClipboard();

  const foreignTextsObject = {
    Kor : {
      copyLink : "링크 복사",
      redo : "다시하기",
      goHome : "다른 테스트 하러 가기",
      copyLinkText : "URL이 복사되었습니다."
    },
    Eng : {
      copyLink : "Copy the Link",
      redo : "Re-Do",
      goHome : "Go to other Tests",
      copyLinkText : "URL copied."
    },
    Jp : {
      copyLink : "リンクをコピーする",
      redo : "やり直し",
      goHome : "他のテストをしに行く",
      copyLinkText : "URLがコピーされました."
    }
  }

  const onClickRedoButton = () => {
    eventSenderGA("Paging","Copy Re-Do Button","Result");
    navigate(`/${testParam}`);
  }
  
  const onClickGoHomeButton = () => {
    eventSenderGA("Paging","Copy Go-HOme Button","Result");
    navigate("/");
  }

  const onClickCopyUrlButton = () =>{
    eventSenderGA("Copy","Copy Url Button","Result");
    copy(`${base_url}/${testParam}/result/${resultParam}`);
    alert(lang && foreignTextsObject[lang].copyLinkText);
  }

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.upperButtonGroup}>
        <button
          className={styles.upperButton}
          onClick={onClickCopyUrlButton}
        >
          <LinkOutlined />
          <span>{lang && foreignTextsObject[lang]?.copyLink}</span>
        </button>
        <button 
          className={styles.upperButton}
          onClick={onClickRedoButton}
        >
          <RedoOutlined />
          <span>{lang && foreignTextsObject[lang]?.redo}</span>
        </button>
      </div>
      <button 
        className={styles.bottomButton}
        onClick={onClickGoHomeButton}
      >
        <HomeOutlined />
        <span>{lang && foreignTextsObject[lang]?.goHome}</span>
      </button>
    </div>
  ); 
}

export default ResultButtonGroup;