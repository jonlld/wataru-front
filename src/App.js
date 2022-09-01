import React, { useState, useRef } from "react";
import Latest from "./components/Latest";
import Book from "./components/Book";

import { Button, Container, Row, Col, Navbar } from "react-bootstrap";

const App = () => {
  const [phrases, setPhrases] = useState("");
  const [bookmarked, setBookmarked] = useState([]);
  const [randomNum, setRandomNum] = useState(0);
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

    // random number for image - do once per fetch
    setRandomNum(Math.floor(Math.random() * 15) + 1);
  };

  const test = "TEST STRING";

  return (
    // <Container style={{ border: "1px solid #444" }}>
    <Container>
      <Row
        style={{ backgroundColor: "#89CFFD", padding: "30px 0" }}
        className="text-center"
      >
        <Col xs={4}>
          <h1 className="header">Wataru</h1>
        </Col>
        <Col xs={8}>
          <form className="form-container" onSubmit={requestHandler}>
            <label htmlFor="phrase">How do I say:</label>
            <input
              type="text"
              id="phrase"
              ref={requestRef}
              placeholder="phrase here..."
            ></input>
            <Button variant="secondary" type="submit">
              Fetch
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        {/* for Latest */}
        <Col xs={6}>
          <h1 style={{ marginTop: "1rem" }}>Last Search:</h1>
          {phrases && (
            <Latest
              phrases={phrases}
              randomNum={randomNum}
              setBookmarked={setBookmarked}
            />
          )}
        </Col>
        {/* for Book & Pages */}
        <Col xs={6}>
          <h1 style={{ marginTop: "1rem" }}>My Phrasebook:</h1>
          {phrases && <Book phrases={phrases} bookmarked={bookmarked} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
