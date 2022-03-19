import React from "react";

const Storiescard = ({ title, para, paraFirst, paraSecond }) => {
  return (
    <>
      <div className="storiesCard">
        <h2 className="storiesCardTitle">{title}</h2>
        <p className="storiesCardPara">{para}</p>
        <p className="bottomPara">
          {paraFirst} <span>{paraSecond}</span>
        </p>
      </div>
    </>
  );
};

export default Storiescard;
