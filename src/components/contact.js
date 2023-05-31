import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import pp_rounded_contact from "../image/pp_rounded_contact.png";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-body" style={{ overflow: "auto" }}>
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr style={{ paddingBottom: "2em" }} />

            <img
              src={pp_rounded_contact}
              alt="contact pic"
              style={{ height: "250px" }}
            />
            <h2>Paulo Pereira</h2>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I have a Ph.D. in computer science from Universidade Federal de
              Pernambuco in Brazil. My skills are software development mainly
              with Python and Java, computer networks, cloud, fog and edge
              computing, IoT, time series forecast (Python and R), performance
              and availability evaluations, analytical modeling, machine
              learning, data science and computer vision.
            </p>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am always interested in new projects. Add me on LinkedIn or
              email me whenever you want to. See ya!
            </p>
            <div
              className="contact-list"
              style={{
                width: "30em",
                margin: "auto",
              }}
            >
              <List>
                {/*<ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i class="fas fa-phone-square-alt" />
                    +55 81 99514 9626
                  </ListItemContent>
                </ListItem> */}
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i class="fas fa-envelope-square" />
                    ppereira.dev@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i class="fab fa-linkedin" />
                    <a
                      href="https://www.linkedin.com/in/ppereiradev"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i class="fa fa-address-card" />
                    <a
                      href="http://lattes.cnpq.br/7559988987817463"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Lattes Resume
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      marginBottom: "100px",
                    }}
                  >
                    <i class="fab fa-google" />
                    <a
                      href="https://scholar.google.com.br/citations?user=mREVZ3wAAAAJ&hl=pt-BR"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Google Scholar
                    </a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
