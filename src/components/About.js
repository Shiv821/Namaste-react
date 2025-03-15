import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    return (
      <div className="user-card">
        <h1>About US page</h1>

        <UserClass name={"Shivam {class}"} location={"Uttar Pradesh {class}"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="user-card">
//       <h1>About US page</h1>

//       <UserClass name={"Shivam {class}"} location={"Uttar Pradesh {class}"} />
//     </div>
//   );
// };

export default About;
