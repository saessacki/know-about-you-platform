function TestResultRenderer({renderResultInfo, lang}){

  const foreignTextsObject = {
    Kor : {
      title : "결과는 ..."
    },
    Eng : {
      title : "Your Result is ..."
    },
    Jp : {
      title : "あなたの結果は ... "
    }
  }

  return(
    <div>
      <h3>{lang && foreignTextsObject[lang].title}</h3>
      <img
        style={{width : "100%"}}
        src={renderResultInfo?.img_src}
        alt={renderResultInfo?.type}
      />
    </div>
  )
}

export default TestResultRenderer;