import React from "react";
import Storiescard from "./Storiescard";
import storiesData from "../../data/stories";
const Lateststories = () => {
  return (
    <>
      <div className="latestStories">
        <h2 className="latestStoriesHead">
          <span>Latest</span> Stories
        </h2>
        <div className="latestStoriesCardContainer">
          {storiesData.map((item, index) => {
            return (
              <Storiescard
                title={item.title}
                para={item.para}
                paraFirst={item.paraFirst}
                paraSecond={item.paraSecond}
              />
            );
          })}
        </div>
        <div className="viewMore">
          <span className="viewMoreHead">view more</span>
          <i className="fa-solid fa-arrow-right rightArrow"></i>
        </div>
      </div>
    </>
  );
};

export default Lateststories;
