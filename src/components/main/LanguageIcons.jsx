import { CircleFlag } from 'react-circle-flags';
import { useNavigate } from 'react-router-dom';
import styles from './languageicons.module.css';

function LanguageIcons(){
    const navigate = useNavigate();

    const onButtonClick = (lang) => {
        navigate(`/?lang=${lang}`);
    }

    return (
        <div>
            {/* -> mbti.com/?lang=Kor */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Kor')} 
                countryCode='kr' width={48}/>
            {/* -> mbti.com/?lang=Eng */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Eng')}
                countryCode='us' width={48}/>
            {/* -> mbti.com/?lang=Jp */}
            <CircleFlag
                className={styles.flagIcon}
                onClick={() => onButtonClick('Jp')}
                countryCode='jp' width={48}/>
        </div>
    );
}

// mbti.com/?lang=Eng&category=love

export default LanguageIcons;