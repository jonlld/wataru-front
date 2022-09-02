import React from "react";
import { Accordion, Stack } from "react-bootstrap";

const Page = ({ phrase }) => {
  return (
    <Accordion className="accordion-element" style={{ marginTop: "8px" }}>
      <Accordion.Item eventKey="1">
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
