import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    var skills = this.props.relevantSkills.map(function (value, i) {
      return <li>{value}</li>;
    });

    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8} style={{ width: "63%" }}>
          <h4 style={{ marginTop: "0px" }}>{this.props.position}</h4>
          <h5 style={{ marginTop: "0px" }}>{this.props.place}</h5>
          <p>{this.props.jobDescription}</p>
          <p>
            Relevant skills: <ul style={{ paddingLeft: "10em" }}>{skills}</ul>
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
