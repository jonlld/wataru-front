import React from "react";
import { Button, Card } from "react-bootstrap";

const Latest = ({ phrases, randomNum, setBookmarked }) => {
  // get last item from array
  const phrase = phrases[phrases.length - 1];

  // use randomNum to pick an image
  const image = `./img/${randomNum}.png`;

  // update boorkmarked on click
  const bookmarkHandler = () => {
    setBookmarked((prev) => [phrase, ...prev]);
  };

  return (
    <Card
      key={phrases}
      className="card-container"
      style={{ marginTop: "1rem", width: "100%" }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "18rem", margin: "0 auto", paddingTop: "24px" }}
      />
      <Card.Body>
        <Card.Title>{phrase.input}</Card.Title>
        <Card.Text>{phrase.translatedText}</Card.Text>
        <div className="d-grid gap-2">
          <Button variant="warning" size="lg" onClick={bookmarkHandler}>
            Add
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Latest;

// *** example structure ***

// [{…}]
// {translatedText: 'カフェ', detectedSourceLanguage: 'en', input: 'Cafe'}
