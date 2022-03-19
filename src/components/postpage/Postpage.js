import React from "react";
import PostHeading from "./PostHeading";
import Postsecond from "./Postsecond";
import PostThird from "./PostThird";

const Postpage = () => {
  return (
    <>
      <div className="postPage">
        <PostHeading></PostHeading>
        <Postsecond></Postsecond>
        <PostThird></PostThird>
      </div>
    </>
  );
};

export default Postpage;
