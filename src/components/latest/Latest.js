import React from "react";
import LatestGridCard from "./LatestGridCard";
import articleSecondData from "../../data/articlesecond";
const Latest = () => {
  return (
    <>
      <div className="latest">
        <h2 className="latestHeading">
          <span>The</span> Latest
        </h2>
        <div className="latestGrid">
          {articleSecondData.map((item, index) => {
            return (
              <div className="latestGriditemCard">
                <LatestGridCard
                  key={index}
                  imgSrc={item.imgUrl}
                  headingFirst={item.title}
                  headingSecond={item.titleSecond}
                  latestPara={item.para}
                  bottomParaLeft={item.bottomFirst}
                  bottomParaRight={item.bottomSecond}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Latest;
