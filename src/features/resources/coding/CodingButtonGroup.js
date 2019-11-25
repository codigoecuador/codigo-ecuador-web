import React from "react";
import "./Coding.css";
import { Button, Sticky } from "semantic-ui-react";

const CodingButtonGroup = props => {
  return (
    <Sticky>
      <div className='coding-button-group'>
        <br />
        <br />
        <Button.Group vertical>
          <button
            onClick={props.handleClick}
            className='coding-button'
            value='Student'
          >
            For Students
          </button>
          <br />
          <br />
          <button
            onClick={props.handleClick}
            className='coding-button'
            value='Parent'
          >
            For Parents
          </button>
          <br />
          <br />
          <button
            onClick={props.handleClick}
            className='coding-button'
            value='Educator'
          >
            For Educators
          </button>
          <br />
          <br />
          <button
            onClick={props.handleClick}
            className='coding-button'
            value='Entrepreneur'
          >
            For Entrepreneurs
          </button>
          <br />
          <br />
        </Button.Group>
      </div>
    </Sticky>
  );
};

export default CodingButtonGroup;
