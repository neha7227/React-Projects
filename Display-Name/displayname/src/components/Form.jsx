import React, { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
    }
    // else alert("pls fill details");
    // else console.alert("pls fill details")
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            required
            onChange={handleFirstName}
          />
          <br />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            required
            onChange={handleLastName}
          />
          <br />
        </div>
        <div>
          {firstName && lastName ? (
            <input type="submit" value="Submit" onClick={handleSubmit} />
          ) : (
            <button>Submit</button>
          )}
        </div>
      </form>
      <p>Full Name: {fullName}</p>
    </>
  );
}
