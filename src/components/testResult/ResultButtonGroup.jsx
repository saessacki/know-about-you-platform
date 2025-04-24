import {HomeOutlined, LinkOutlined, RedoOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';

function ResultButtonGroup({testParam, resultParam}){
  const navigate = useNavigate();
  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  }

  const onClickGoHomeButton = () => {
    navigate("/");
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button
          className={styles.upperButton}
          onClick={() => alert("URL이 복사되었습니다.")}>
          <LinkOutlined />
          &nbsp; 링크 복사
        </button>
        <button 
          className={styles.upperButton}
          onClick={onClickRedoButton}>
          <RedoOutlined />
          &nbsp; 다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button 
          className={styles.bottomButton}
          onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp; 다른 테스트 하러 가기
        </button>
      </div>
    </div>
  ); 
}

export default ResultButtonGroup;