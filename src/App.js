import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Latest from "./components/Latest";
import Book from "./components/Book";

import { Button, Container, Row, Col, Navbar } from "react-bootstrap";

const App = () => {
  const [phrases, setPhrases] = useState("");
  const [latest, setLatest] = useState();
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
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Row className="text-center">
          <Col xs={6}>
            <Header />
          </Col>
          <Col xs={6}>
            <form onSubmit={requestHandler}>
              <label htmlFor="phrase">Tell Me:</label>
              <input
                type="text"
                id="phrase"
                ref={requestRef}
                placeholder="type phrase..."
              ></input>
              <Button variant="secondary" type="submit">
                Fetch
              </Button>
            </form>
          </Col>
        </Row>
      </Navbar>
      <Row>
        {/* for Latest */}
        <Col xs={6}>{phrases && <Latest phrases={phrases} />}</Col>
        {/* for Book & Pages */}
        <Col xs={6}>{phrases && <Book phrases={phrases} />}</Col>
      </Row>
    </Container>
  );
};

export default App;
