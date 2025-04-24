import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, XIcon } from 'react-share';
import { base_url } from '../../App';
import styles from './shareButtonGroup.module.css';

function ShareButtonGroup({testParam, resultParam, renderTestInfo}) {
  return(
    <div>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon round={true} size={48} className={styles.socialMediaIcon}/>
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info?.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}  
        >
          <XIcon round={true} size={48} className={styles.socialMediaIcon}/>
        </TwitterShareButton>
        <button className={styles.urlShareButton}>
          URL
        </button>
      </div>
    </div>
  )
}

export default ShareButtonGroup;