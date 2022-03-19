import React from "react";

const LatestGridCard = (props) => {
  return (
    <>
      <div className="latestGridCard">
        <img src={props.imgSrc} alt="card1" className="cardImage" />
        <div className="cardTitle">
          <div className="cardHeadTitle">
            <h1 className="cardHeadInner">{props.headingFirst} </h1>
            <h1 className="cardHeadInner">{props.headingSecond}</h1>
          </div>
          <p className="cardPara">{props.latestPara}</p>
          <p className="paraBottom">
            {props.bottomParaLeft} <span>{props.bottomParaRight}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestGridCard;
