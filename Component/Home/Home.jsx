import React from "react";
import "./Home.scss";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {Link } from "react-router-dom";
import Image from "././Assets/Image.jpg";
import rest1 from "././Assets/rest1.png";
import rest2 from "././Assets/rest2.png";
import rest3 from "././Assets/rest3.png";
import rest4 from "././Assets/rest4.png";
import rest5 from "././Assets/rest5.png";
import rest6 from "././Assets/rest6.png";

export function Home() {
  return (
    <div>
      <div className="main">
        <div className="header">Vento</div>
      </div>
      <div className="firstrow"></div>
      <div className="secondrow"></div>
      <div className="thirdrow"></div>
      <br />
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
        <div className="textbold">
          <span>Exciting places </span>
          <br />
          <span> around you</span>
        </div>
        <br />
        <div className="text">
          <span>Experience the rich pub culture in a city </span>
          <br />
          <span> that doesn't sleep and love to call our</span>
          <br />
          <span> home</span>
        </div>
        <div className="imagediv">
          <img src={Image} className="image" height="1000px" alt="Image" />
        </div>
        <br />
        <br />
        <br />
        <div className="restraurant">
          <div className="div">
            <Link to="/restraurant"><img src={rest1} alt="Rest 1" width="250px" height="250px"/></Link>
            <div className="restnName">Indigo XP</div>
            <div className="restnAddress">Karamangala 5th Block</div>
          </div>
          <div className="div">
            <Link to="/restraurant"><img src={rest2} alt="Rest 2" width="250px" height="250px"/></Link>
            <div className="restnName">The Black Rabbit</div>
            <div className="restnAddress">Indiranagar</div>
          </div>
        </div>
        <div className="restraurant">
          <div className="div">
            <Link to="/restraurant"><img src={rest3} alt="Rest 3" width="250px" height="250px"/></Link>
            <div className="restnName">Shivala</div>
            <div className="restnAddress">CSMT</div>
          </div>
          <div className="div">
            <Link to="/restraurant"><img src={rest4} alt="Rest 4" width="250px" height="250px"/></Link>
            <div className="restnName">Sanjida Restraurant</div>
            <div className="restnAddress">Sanjida Apt 3rd floor</div>
          </div>
        </div>
        <div className="restraurant">
          <div className="div">
            <Link to="/restraurant"><img src={rest5} alt="Rest 5" width="250px" height="250px"/></Link>
            <div className="restnName">Dominos</div>
            <div className="restnAddress">Gandhi Nagar</div>
          </div>
          <div className="div">
            <Link to="/restraurant"><img src={rest6} alt="Rest 6" width="250px" height="250px"/></Link>
            <div className="restnName">Kunjvihar</div>
            <div className="restnAddress">Kala Talav</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home();
