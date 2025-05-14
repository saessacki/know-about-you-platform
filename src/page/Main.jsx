import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumbnailList from "../components/main/ThumbnailList";
import MainMetatagRenderer from '../components/metatagRenderer/MainMetatagRenderer';
import GlobalStyle from '../globalStyles';
import Header from '../components/Header';

function Main(){
    return <div>
        <MainMetatagRenderer />
        <GlobalStyle />
        <Header />
        <LanguageIcons/>
        <MainBanner/>
        <CategoryButtons/>
        <ThumbnailList/>
    </div>
}

export default Main;