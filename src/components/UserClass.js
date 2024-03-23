import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Akshay");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
      },
    });
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}
export default UserClass;
