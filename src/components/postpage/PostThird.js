import React from "react";
import PostCard from "./PostCard";
import PostThirdCardSecond from "./PostThirdCardSecond";
import dataPost from "../../data/postdata";
const PostThird = () => {
  return (
    <>
      <div className="postThird">
        <div className="postThirdItems">
          <h3 className="postThirdHead">More From The Siren</h3>
          <div className="postThirdCard">
            {dataPost.map((item, index) => {
              return (
                <PostCard
                  paraTop={item.paraTop}
                  imgUrl={item.imgUrl}
                  heading={item.heading}
                  name={item.name}
                  readTime={item.readTime}
                />
              );
            })}
          </div>
          <div className="postThirdCardSecond">
            <PostThirdCardSecond></PostThirdCardSecond>
            <PostThirdCardSecond></PostThirdCardSecond>
            <PostThirdCardSecond></PostThirdCardSecond>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostThird;
