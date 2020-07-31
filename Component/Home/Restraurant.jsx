import React from "react";
import "./Home.scss";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Rest from "././Assets/Rest.jpg";
import Happyhour from "././Assets/Happyhour.jpg";
import ComedyNight from "././Assets/ComedyNight.jpg";
import RoomIcon from '@material-ui/icons/Room';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Card from '@material-ui/core/Card';

export function Restraurant() {
  return (
    <div className="restraurantdiv">
    <br/>
    <br/>
      <div className="searchbar">
        <div className="dashboardSearch">
          <div className="search">
            <div className="dashboardsearchicon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Where are you going ?"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </div>
      <br/>
    <br/>
    <div className="street">
        <div className="Birthdayparty">
            <RoomIcon/>
            Church Street
        </div>
        <div className="Birthdayparty">
            <LocalBarIcon/>
            Birthday Party
        </div>
    </div>
    <br/>
    <Card className="card">
    <div className="imagediv">
        <img src={Rest} className="RestImage" alt="Image" height="300px"/>
    </div>
    <br/>
    <div className="Socials">
        <div className="Birthdayparty">
            Socials
        </div>
        <div className="time">
            5KM
        </div>
    </div>
    <div>
    <div className="events">
      <Card className="Partycard">
        <img src={Happyhour} alt="Happyhour" width="154px" height="128px"/>
        <div className="Happyhour">
            Happy Hour
        </div>
        <br/>
        <div className="Happyhourtime">
            09:00 PM
        </div>
      </Card>
      <Card className="Partycard">
        <img src={ComedyNight} alt="Happyhour"/>
        <div className="Happyhour">
            Comedy Nights
        </div>
        <br/>
        <div className="Happyhourtime">
            09:00 PM
        </div>
      </Card>
    </div>
    </div>
    </Card>
    </div>
  );
}
export default Restraurant();
