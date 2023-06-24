import React, { useState } from "react";

function StateHookWithObject() {
  const [name, setName] = useState({ first: "", last: "" });
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={name.first}
        onChange={(e) => setName({ ...name, first: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        value={name.last}
        onChange={(e) => setName({ ...name, last: e.target.value })}
      ></input>
      <h2>Your first name is - {name.first}</h2>
      <h2>Your last name is - {name.last}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default StateHookWithObject;
