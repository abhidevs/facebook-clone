import React from "react";
import SidebarRow from "../SidebarRow";
import "./style.css";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={FlagRoundedIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={PeopleRoundedIcon} title="Frinds" />
      <SidebarRow Icon={ChatRoundedIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontRoundedIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryRoundedIcon} title="Videos" />
      <SidebarRow Icon={SportsEsportsRoundedIcon} title="Games" />
      <SidebarRow Icon={ExpandMoreRoundedIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
