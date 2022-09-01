import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Phrases from "./components/Phrases";

import Button from "react-bootstrap/Button";

const App = () => {
  const [phrases, setPhrases] = useState([]);
  const requestRef = useRef();

  // fetch request
  const requestHandler = async (e) => {
    e.preventDefault();

    // read and format data
    const enteredRequest = requestRef.current.value;
    const formattedRequest = {
      lang: "ja",
      string: enteredRequest,
    };

    const url = "http://localhost:8000";

    const options = {
      method: "POST",
      body: JSON.stringify(formattedRequest),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(`${url}/api/phrases`, options);
    const data = await res.json();

    console.log("data: ", data);
  };

  return (
    <div>
      <Header />
      <form onSubmit={requestHandler}>
        <label htmlFor="phrase">Phrase</label>
        <input type="text" id="phrase" ref={requestRef}></input>
        <Button type="submit">Test Button</Button>
      </form>
      {/* <Phrases phrases={phrases} /> */}
    </div>
  );
};

export default App;
