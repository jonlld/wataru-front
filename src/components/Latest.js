import React from "react";
import { Button, Card } from "react-bootstrap";

const Latest = ({ phrases, randomNum, setBookmarked }) => {
  // last item from array
  const phrase = phrases[phrases.length - 1];

  const image = `./img/${randomNum}.png`;

  const bookmarkHandler = () => {
    setBookmarked((prev) => [phrase, ...prev]);
  };

  // TODO
  // To add the favourite functionality - update faves state & local storage

  return (
    <Card style={{ marginTop: "1rem", width: "100%" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "18rem", margin: "0 auto", padding: "24px" }}
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

// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 1: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 2: {translatedText: '音楽', detectedSourceLanguage: 'en', input: 'Music'}
// 3: {translatedText: 'コーヒー', detectedSourceLanguage: 'en', input: 'Coffee'}
// 4: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 5: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 6: {translatedText: 'カフェ', detectedSourceLanguage: 'en', input: 'Cafe'}
