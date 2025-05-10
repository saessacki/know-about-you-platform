import { Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import { eventSenderGA } from '../../tools/tools';
import { Link } from 'react-router-dom';
import CoupangDynamicBanner from '../CoupangDynamicBanner';

function BlogRenderer({content}){
  const onTestThumbnailClick = () => {
    eventSenderGA("Paging", "Click Blog Bottom Test Thumbnail", "Blog");
  }

  return (
    <div>
      <h1>{content?.title}</h1>
      <div style={{ textAlign: "left", lineHeight:"1.6rem" }}>
        <ReactMarkdown>{content?.texts}</ReactMarkdown>
      </div>
      <Divider />
      <CoupangDynamicBanner unit={"resultBanner"}/>
      <h3>{content?.endText}</h3>
      <Link to={`/${content?.testUrl}`} onClick={onTestThumbnailClick}>
        <img
          style={{width: "100%"}}
          src={`${content?.testImg}`}
          alt={`${content?.testUrl}`}
        />
      </Link>
    </div>
  )
}

export default BlogRenderer;