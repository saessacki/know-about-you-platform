import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import CoupangDynamicBanner from '../CoupangDynamicBanner';

const ResultThumbnailList = ({ testParam }) => {
  const [testList] = useState(TESTS);

  return (
    <div>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .map((item, idx) => (
          <div key={`/${item?.info?.mainUrl}`}>
            <Link to={`/${item?.info?.mainUrl}`}>
              <img
                style={{width: "450px", height:"363px"}}
                src={item?.info?.thumbImage}
                alt={item?.info?.mainTitle}
              />
            </Link>
            {idx % 2 === 0 && <CoupangDynamicBanner unit={"resultBanner"} />}
          </div>
        ))}
    </div>
  );
};

export default ResultThumbnailList;