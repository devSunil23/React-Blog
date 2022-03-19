import React from "react";

const SmallCard = ({ imgUrl, title, paraBottomFirst, paraBottomSecond }) => {
  return (
    <>
      <div className="smallConatiner">
        <img src={imgUrl} alt="small" className="smallImage" />
        <div className="smallRight">
          <h2 className="smallHeader">{title}</h2>
          <p className="bottomPara">
            {paraBottomFirst} <span>{paraBottomSecond}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
