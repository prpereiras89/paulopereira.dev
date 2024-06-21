import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Papers extends Component {
  render() {
    function changeColor(e) {
      e.target.style.color = "rgb(255,64,129)";
    }

    function changeToWhite(e) {
      e.target.style.color = "white";
    }

    return (
      <Grid>
        <Cell col={2}>
          <p style={{ fontSize: "2em" }}>{this.props.year}</p>
        </Cell>
        <Cell col={10} style={{ width: "63%" }}>
          <h4 style={{ marginTop: "0px" }}>
            <a
              href={this.props.link}
              rel="noopener noreferrer"
              target="_blank"
              onMouseOver={changeColor}
              onMouseOut={changeToWhite}
              style={{ textDecoration: "none", color: "white" }}
            >
              {this.props.title}
            </a>
          </h4>
          <h5 style={{ marginTop: "0px" }}>{this.props.metaData}</h5>
          <p style={{ fontWeight: "bold" }}>Abstract:</p>
          <p>{this.props.abstract}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Papers;
