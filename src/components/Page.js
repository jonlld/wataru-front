import React from "react";
import { Button, Accordion, Stack } from "react-bootstrap";

// TODO change color / formatting
// TODO add remove option
// TODO stop last accordion from opening

const Page = ({ phrase }) => {
  return (
    <Accordion style={{ marginTop: "8px" }}>
      <Accordion.Item>
        <Accordion.Header>{phrase.input}</Accordion.Header>
        <Accordion.Body>
          <Stack>
            <div>{phrase.translatedText}</div>
            <div></div>
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Page;

// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
