import { useEffect, useState } from 'react'
import styles from "./quiz.module.css";
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

function Quiz({setMode, questions, mbtiScore, setMbtiScore}) {

  const [questionNum, setQuestionNum] = useState(0);
  const onOptionClick = (type) => {
     //mbtiScore[type] = mbtiScore[type] + 1;
    console.log("type",type);
    mbtiScore[type] += 1; //점수판 업데이트
    setMbtiScore({...mbtiScore}); //불변성으로 인한 구조분해 할당 이용
    setQuestionNum((prev) => prev + 1);
  }
  
  useEffect(()=>{
    console.log("questionNum", questionNum);
    console.log("questions.length", questions.length);
    if(questionNum === questions.length){
      setMode("loading");
    }
  },[questionNum, questionNum.length, setMode])

  return (
    <div>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question}
      </h3>
      {questions[questionNum]?.answers && arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
        <button
          className={styles.optionButton}
          onClick={() => onOptionClick(option.type)}
          key={option.content}
        >
          {option.content}
        </button>
      ))}
      <Progress 
        percent={(questionNum / questions.length) * 100} 
        showInfo={false}
      />
      <h4>
        {questionNum} / {questions.length}
      </h4>
    </div>
  )
}

export default Quiz

// 16 Results
// 12(4 x 3) Questions - Options selection
// E:2 / I: 1 / ... / J: 3 / P: 0
// MBTI Calcul ex. ENFJ