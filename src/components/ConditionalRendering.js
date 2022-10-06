import React from "react";

const ConditionalRendering = () => {
  const isOn = true;
  const names = ["ihtisham", "umair", "akbar"];
  return (
    <div>
      {names.map((name) => (
        <h1>welcome {name}</h1>
      ))}
      <div>{isOn ? "loggedin" : "loggedoout"}</div>
    </div>
  );
};

export default ConditionalRendering;
