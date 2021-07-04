import React from "react";
import "./style.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header__input">
          <SearchRoundedIcon style={{ color: "grey" }} />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="" alt={user.displayName} src={user.photoURL} />
          <h4>{user.displayName.split(" ")[0]}</h4>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
