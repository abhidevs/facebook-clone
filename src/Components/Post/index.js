import { Avatar } from "@material-ui/core";
import React from "react";
import "./style.css";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

function Post({ profilePic, image, username, timestamp, caption }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" alt={username} />
        <div className="post__topInfo">
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{caption}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
