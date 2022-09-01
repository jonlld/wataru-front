import React from "react";
import Page from "./Page";

const Book = ({ phrases }) => {
  // check
  console.log("Book Received: ", phrases);

  return (
    <div>
      {phrases.map((phrase) => {
        return <Page phrase={phrase} />;
      })}
    </div>
  );
};

export default Book;

// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 1: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 2: {translatedText: '音楽', detectedSourceLanguage: 'en', input: 'Music'}
// 3: {translatedText: 'コーヒー', detectedSourceLanguage: 'en', input: 'Coffee'}
// 4: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 5: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 6: {translatedText: 'カフェ', detectedSourceLanguage: 'en', input: 'Cafe'}
