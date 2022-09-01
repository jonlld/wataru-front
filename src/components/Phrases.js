import React from "react";
import { Button, Card } from "react-bootstrap";

const Phrases = ({ phrases }) => {
  // array
  console.log("props received: ", phrases);

  const input = phrases[0].input;
  const output = phrases[0].translatedText;

  return (
    <Card style={{ marginTop: "1rem", width: "12rem" }}>
      <Card.Img variant="top" src="./img/sakura.png" />
      <Card.Body>
        <Card.Title>{input}</Card.Title>
        <Card.Text>{output}</Card.Text>
        <Button variant="secondary">Got it!</Button>
      </Card.Body>
    </Card>
    // <Card>
    //   <p>{phrases[0].translatedText}</p>
    // </Card>
  );
};

export default Phrases;

// array of objects:
// { detectedSourceLanguage: "en"
// input: "Museum"
// translatedText: "美術館" }
