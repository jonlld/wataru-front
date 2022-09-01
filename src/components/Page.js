import React from "react";
import { Accordion } from "react-bootstrap";

const Page = ({ phrase }) => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>{phrase.input}</Accordion.Header>
        <Accordion.Body>{phrase.translatedText}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Page;

// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
