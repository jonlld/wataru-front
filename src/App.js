import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Phrases from "./components/Phrases";

const App = () => {
  const [phrases, setPhrases] = useState([]);
  const requestRef = useRef();

  // fetch request
  const requestHandler = async (e) => {
    e.preventDefault();

    // read and format data
    const enteredRequest = requestRef.current.value;
    const formattedRequest = {
      request_lang: "ja",
      request_string: enteredRequest,
    };

    const url = "http://localhost/8000";
    const options = {
      method: "POST",
      body: JSON.stringify(formattedRequest),
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(formattedRequest);

    // const res = await fetch(`${url}/api/phrases`, options);
    // const data = await res.json();

    // console.log(data);
  };

  return (
    <div>
      <Header />
      <form onSubmit={requestHandler}>
        <label htmlFor="phrase">Phrase</label>
        <input type="text" id="phrase" ref={requestRef}></input>
        <button type="submit">Submit</button>
      </form>
      <Phrases phrases={phrases} />
    </div>
  );
};

export default App;
