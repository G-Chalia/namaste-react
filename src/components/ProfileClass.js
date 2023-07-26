import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("CHILD-constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/G-Chalia");

    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("CHILD-didmoount");
  }

  //   componentDidUpdate(prevProps, prevSate) {
  //     console.log("CHILD-didupdate");
  //   }

  componentWillUnmount() {
    console.log("CHILD-will unamount");
  }

  render() {
    console.log("CHILD-render");
    return (
      <div>
        <h1 className="text-red">Class Based Component</h1>
        <h1>Name:{this.state.userInfo.login}</h1>
        <img src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}

export default Profile;
