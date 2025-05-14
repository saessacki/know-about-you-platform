import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './categoryButtons.module.css';

function CategoryButtons(){
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState('Kor');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();
    
    const foreignTextsObject = {
        Kor : {
            all : {
                text: "전체",
                icon: "🌈"
            },
            love : {
                text: "연애",
                icon: "💝"
            },
            characteristic: {
                text: "성격",
                icon: "✨"
            }
        },
        Eng : {
            all : {
                text: "All",
                icon: "🌈"
            },
            love : {
                text: "Love",
                icon: "💝"
            },
            characteristic: {
                text: "Personality",
                icon: "✨"
            }
        },
        Jp : {
            all : {
                text: "すべて",
                icon: "🌈"
            },
            love : {
                text: "れんあい",
                icon: "💝"
            },
            characteristic: {
                text: "せいかく",
                icon: "✨"
            }
        }
    };

    useEffect(() => {
        const currentLang = searchParams.get('lang') || 'Kor';
        const currentCat = searchParams.get('cat') || 'all';
        setLanguage(currentLang);
        setSelectedCategory(currentCat);
    }, [searchParams]);

    const onCategoryButtonClick = (category) => {
        if(category === "all"){
            navigate(`/?lang=${language}`);
        } else if(category === 'love' || category === 'characteristic'){
            navigate(`/?lang=${language}&cat=${category}`);
        } else {
            alert('잘못된 카테고리입니다.');
            navigate(`/?lang=${language}`);
        }
        setSelectedCategory(category);
    };

    const getButtonClassName = (category) => {
        return `${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonSelected : ''}`;
    };

    return (
        <div className={styles.categoryButtonContainer}>
            <button 
                className={getButtonClassName('all')}
                onClick={() => onCategoryButtonClick("all")}
            >
                <span className={styles.icon}>{foreignTextsObject[language].all.icon}</span>
                {foreignTextsObject[language].all.text}
            </button>
            <button 
                className={getButtonClassName('love')}
                onClick={() => onCategoryButtonClick("love")}
            >
                <span className={styles.icon}>{foreignTextsObject[language].love.icon}</span>
                {foreignTextsObject[language].love.text}
            </button>
            <button 
                className={getButtonClassName('characteristic')}
                onClick={() => onCategoryButtonClick("characteristic")}
            >
                <span className={styles.icon}>{foreignTextsObject[language].characteristic.icon}</span>
                {foreignTextsObject[language].characteristic.text}
            </button>
        </div>
    );
}

export default CategoryButtons;