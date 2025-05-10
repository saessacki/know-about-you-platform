import { Link } from 'react-router-dom';

function BlogButton({testParam,lang}){

  const foreignTextsObject = {
    Kor : {
      btnText : "해당 테스트 블로그 보러가기~",
    },
    Eng : {
      btnText : "Off we go to the test blog~ Zoom!",
    },
    Jp : {
      btnText : "さあ、テストブログへシュッとひとっ飛び〜！",
    }
  }

  return <div>
    <Link to={`/blog/${testParam}`}>
                <button style={{
                    backgroundColor: "white",
                    width: "12rem",
                    height: "auto",
                    fontSize: "1.3rem",
                    color: "brown",
                    border: "3px solid brown",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}>{lang && foreignTextsObject[lang]?.btnText}</button>
            </Link>
  </div>
}

export default BlogButton;