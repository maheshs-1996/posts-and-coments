import React, { useRef, useState } from "react";

const PostComponent = ({ post }) => {
  const { author, text, replies = [] } = post;
  const [showComents, setShowCommentFlag] = useState(true);

  const topRowRef = useRef();

  const toggleFlag = () => {
    const currentFlag = !showComents;
    setShowCommentFlag(currentFlag);
    if (!currentFlag) {
      topRowRef.current.scrollIntoView();
      // document.querySelector(".top-row").scrollIntoView();
    }
  };

  return (
    <div className="post">
      <div ref={topRowRef} className="top-row">
        {showComents ? null : (
          <div onClick={toggleFlag} className="expand-pin"></div>
        )}
        <img src={author.avatar} alt="user-dp" className="user-img" />
        <span className="user-name">{author.name}</span>
      </div>

      {showComents ? (
        <div className="bottom">
          <div className="post-border" onClick={toggleFlag}></div>
          <div className="post-content">
            <div className="comment">
              <span>{text}</span>
              {replies.length
                ? replies.map((reply) => <PostComponent post={reply} />)
                : ``}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostComponent;
