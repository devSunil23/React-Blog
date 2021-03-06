import React, { useState } from "react";
import BigverticalImage from "./BigverticalImage";
import Latestarticlecard from "./Latestarticlecard";
import Loadmore from "./Loadmore";
import articleData from "../../data/article";
const Article = () => {
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="latArticlesGridLeft">
        {articleData.map((item, index) => {
          if (item.latest === "latest") {
            return (
              <Latestarticlecard
                imgCard={item.imgUrl}
                key={index}
                headingTitle={item.title}
                articlePara={item.para}
                paraBottomFirst={item.travelName}
                paraBottomSecond={item.travelTime}
              />
            );
          }
        })}
        {show ? (
          <div className="latArticlesGridLeft">
            {articleData.map((item, index) => {
              if (item.type === "show") {
                return (
                  <Latestarticlecard
                    imgCard={item.imgUrl}
                    key={index}
                    headingTitle={item.title}
                    articlePara={item.para}
                    paraBottomFirst={item.travelName}
                    paraBottomSecond={item.travelTime}
                  />
                );
              }
            })}
          </div>
        ) : (
          ""
        )}

        <Loadmore shomoreArticle={showMore} show={show}></Loadmore>
        <BigverticalImage></BigverticalImage>
      </div>
    </>
  );
};

export default Article;
