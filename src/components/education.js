import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8} style={{ width: "63%" }}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <h5 style={{ marginTop: "0px" }}>{this.props.position}</h5>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
