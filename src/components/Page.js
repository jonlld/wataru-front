import React from "react";
import { Button, Accordion, Stack } from "react-bootstrap";

// TODO change color / formatting
// TODO add remove option
// TODO stop last accordion from opening

// reference:
// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}

const Page = ({ phrase }) => {
  return (
    <Accordion style={{ marginTop: "8px" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{phrase.input}</Accordion.Header>
        <Accordion.Body>
          <Stack>
            <div>{phrase.translatedText}</div>
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Page;
