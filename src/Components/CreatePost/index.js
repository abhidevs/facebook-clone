import React, { useState } from "react";
import "./style.css";
import { Avatar } from "@material-ui/core";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import firebase from "firebase";

function CreatePost() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.length !== 0 || imageUrl.length !== 0) {
      db.collection("posts").add({
        caption: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
      setInput("");
      setImageUrl("");
    }
  };

  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar src={user.photoURL} alt={user.displayName} />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="createPost__input"
            type="text"
            placeholder={`what's on your mind, ${
              user.displayName.split(" ")[0]
            }?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL"
          />
          <button type="submit">Hidden button</button>
        </form>
      </div>
      <div className="createPost__bottom">
        <div className="createPost__option">
          <VideocamRoundedIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className="createPost__option">
          <PhotoLibraryRoundedIcon style={{ color: "green" }} />
          <h5>Photo/Video</h5>
        </div>
        <div className="createPost__option">
          <InsertEmoticonRoundedIcon style={{ color: "orange" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
