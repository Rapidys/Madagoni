import React from 'react';
import {
  Col,
  Container,
  FormGroup,
  FormInput,
  FormSelect,
  Row
} from "shards-react";

const SearchForms = () => {
  return (
    <Container>
      <h1>Documents</h1>
      <Row className={"mt-5"}>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>
      </Row>
      <Row className={"mt-5 mb-5"}>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>
        <Col>
          <FormSelect>
            <option value="first">This is the first option</option>
            <option value="second">This is the second option.</option>
            <option value="third" disabled>
              This option is disabled.
            </option>
          </FormSelect>
        </Col>


      </Row>

        <FormGroup>
          <FormInput  placeholder="Search..." type={"text"} />
        </FormGroup>

    </Container>

  );
};

export default SearchForms;
