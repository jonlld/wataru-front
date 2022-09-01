import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Phrases from "./components/Phrases";

import { Button } from "react-bootstrap";

const App = () => {
  const [phrases, setPhrases] = useState("");
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
    setPhrases(data);
  };

  const test = "TEST STRING";

  return (
    <div className="container-sm">
      <Header />
      <form className="d-grid gap-2" onSubmit={requestHandler}>
        <label htmlFor="phrase">Phrase</label>
        <input type="text" id="phrase" ref={requestRef}></input>
        <Button variant="secondary" type="submit">
          Get Phrase
        </Button>
      </form>
      {phrases && <Phrases phrases={phrases} />}
    </div>
  );
};

export default App;
