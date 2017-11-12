import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form className="container col-md-5 p-5">
      <h2 class="display-4 p-1">
      <Label for="container" className="text-center"><img className="col-md-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/SEPTA_text.svg/1200px-SEPTA_text.svg.png" />Regional Rail Fares</Label>
      </h2>
        <FormGroup>
          <Label for="examplePassword" className="text-center p-3">Where are you going?</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>CCP/1</option>
            <option>Zone 2</option>
            <option>Zone 3</option>
            <option>Zone 4</option>
            <option>Zone 6 (Now NJ)</option>
          </Input>
        </FormGroup>
        <FormGroup>
        <Label for="examplePassword" className="text-center p-3">When are you riding?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Weekday</option>
          <option>Evening</option>
          <option>Weekend</option>
        </Input>
      </FormGroup>
      <div className="p-5 center">
      <Button color="primary">Explanation of the above options</Button>
      </div>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}