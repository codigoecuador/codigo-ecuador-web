import React from "react";
import { connect } from "react-redux";
import { Grid, Image } from "semantic-ui-react";

const PartnerGrid = props => {
  let num = props.size === "mobile" ? 1 : 2;
  return (
    <Grid.Row columns={num}>
      <br />
      <Grid.Column verticalAlign="center">
        <Image className="partner-image" src={props.image} />
      </Grid.Column>

      <Grid.Column verticalAlign="center">
        <div className="headline">{props.name}</div>
        <div className="partner-description">{props.content}</div>
      </Grid.Column>
    </Grid.Row>
  );
};

const mapStateToProps = state => {
  return { size: state.size.size };
};

export default connect(mapStateToProps)(PartnerGrid);
