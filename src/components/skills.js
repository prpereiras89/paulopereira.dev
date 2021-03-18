import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12} style={{ width: "100%" }}>
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
              buffer={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
