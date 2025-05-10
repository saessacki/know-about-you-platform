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
      copyLink : "リンクコピー",
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
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button
          className={styles.upperButton}
          onClick={onClickCopyUrlButton}>
          <LinkOutlined />
          &nbsp; {lang && foreignTextsObject[lang]?.copyLink}
        </button>
        <button 
          className={styles.upperButton}
          onClick={onClickRedoButton}>
          <RedoOutlined />
          &nbsp; {lang && foreignTextsObject[lang]?.redo}
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button 
          className={styles.bottomButton}
          onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp; {lang && foreignTextsObject[lang]?.goHome}
        </button>
      </div>
    </div>
  ); 
}

export default ResultButtonGroup;