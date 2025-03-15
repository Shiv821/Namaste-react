import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>Count = {count}</h1>
      <h2>{props.name}</h2>
      <h3>Location : Bulandshahr</h3>
      <h4>Contact :@shivamsept27</h4>
    </div>
  );
};

export default User;
