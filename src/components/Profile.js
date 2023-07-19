import React, { useEffect } from "react";

const ProfileFunctional = (props) => {
  const [count, setcount] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Time Started");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>
        Fucntion based {props.name} {count}
      </h1>
      <button onClick={() => setcount(1)}>Button</button>
    </div>
  );
};

export default ProfileFunctional;
