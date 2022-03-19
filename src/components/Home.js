import React from "react";
import { NavLink } from "react-router-dom";
import Latest from "./latest/Latest";
import Latestarticle from "./latest/Latestarticle";
import Lateststories from "./latest/Lateststories";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="grid1 grid">
          <div className="homeTitle">
            <NavLink to="/post" className="headingPara">
              <h3 className="titleHead"> Title of vertical gallery</h3>
              <p className="titlePara">Travel/21 agust 2022</p>
            </NavLink>
          </div>
        </div>
        <div className="grid2 grid">
          <div className="homeTitleRight">
            <h3 className="titleHeadRight">
              The sound cloud you loved is domed
            </h3>
            <p className="titleParaRight">Travel/21 agust 2022</p>
          </div>
        </div>
        <div className="grid3 grid">
          <div className="homeTitleRight">
            <h3 className="titleHeadRight">
              The sound cloud you loved is domed
            </h3>
            <p className="titleParaRight">Travel/21 agust 2022</p>
          </div>
        </div>
      </div>
      <Latest></Latest>
      <Latestarticle></Latestarticle>
      <Lateststories></Lateststories>
    </>
  );
};

export default Home;
