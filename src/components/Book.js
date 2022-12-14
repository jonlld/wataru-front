import React from "react";
import Page from "./Page";

const Book = ({ bookmarked }) => {
  return (
    <div>
      {bookmarked.map((bookmark) => {
        return <Page phrase={bookmark} />;
      })}
    </div>
  );
};

export default Book;

// *** example structure ***

// [{…}, {…}, {…}]
// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 1: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
// 2: {translatedText: '音楽', detectedSourceLanguage: 'en', input: 'Music'}
