import React from "react";
import User from "./User";
import UserClass from "./UserClass.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <User />
        <UserClass name={" abs"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
