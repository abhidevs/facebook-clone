import React, { useState, useEffect } from "react";
import db from "../../firebase";
import CreatePost from "../CreatePost";
import Post from "../Post";
import Stories from "../Stories";
import "./style.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="feed">
      <Stories />
      <CreatePost />

      {posts?.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          caption={post.data.caption}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

    </div>
  );
}

export default Feed;
