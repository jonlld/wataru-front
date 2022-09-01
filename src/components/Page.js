import React from "react";
import { Button, Accordion, Stack } from "react-bootstrap";

const Page = ({ phrase }) => {
  return (
    <Accordion flush="true">
      <Accordion.Item eventkey="0">
        <Accordion.Header>{phrase.input}</Accordion.Header>
        <Accordion.Body>
          <Stack>
            <div>{phrase.translatedText}</div>
            <div>
              <Button size="sm" variant="secondary">
                Remove
              </Button>
            </div>
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Page;

// 0: {translatedText: '美術館', detectedSourceLanguage: 'en', input: 'Museum'}
