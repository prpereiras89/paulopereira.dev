import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pp_rounded from "../image/pp_rounded.png";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid" style={{ overflow: "auto" }}>
          <Cell col={12}>
            <img className="profile-pic" src={pp_rounded} alt="profile pic" />
            <div className="banner-text" style={{ marginBottom: "50px" }}>
              <h1>Paulo Pereira</h1>
              <h2 style={{marginBottom: '0px'}}>IT Analyst at UFRPE</h2>
              <h2>Ph.D. in Computer Science</h2>
              <hr />
              <p>
                Data Science | Artificial Intelligence | Cloud Computing | Computional Modeling
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ppereiradev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/ppereiradev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>

                {/* Google Scholar */}
                <a
                  href="https://scholar.google.com.br/citations?user=mREVZ3wAAAAJ&hl=pt-BR"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-google" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
