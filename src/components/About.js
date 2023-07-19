import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";

const About2 = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <ProfileFunctional name={"Functionl props"} />
        {/* <Profile name={"Class Props"} /> */}
      </div>
    </>
  );
};

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h1>Swiigy Clone</h1>
        <Profile name={"Class Props"} />
      </div>
    );
  }
}

export default About2;
