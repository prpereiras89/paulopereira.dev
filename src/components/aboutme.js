import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Deck from "./deck";
import PHOTOS from './photos.json'

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>So, who am I?</h1>
            <h3>Me talking about myself...</h3>
          </Cell>

          <Cell
            className="about-cell-2"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto" }}
          >
            <div style={{ textIndent: "2em" }}>
              <p>
                My name is Paulo Pereira, I am from the most beautiful city in
                the whole world, also known as Brasília, which is the capital of
                Brazil. Currently, I am living in Recife, an awesome city,
                located in Pernambuco along the Northeast coast of Brazil. At
                the moment, I am getting my Ph.D. in computer science at the
                Universidade Federal de Pernambuco, which is the same place
                where I got my Master's degree also in computer science. During
                my bachelor's degree, I had the opportunity of being an exchange
                student at the State University of New York at Oswego, where I
                studied for one year and a half. Over there, I was enrolled in a
                class of Data Analytics, which made me fall in love with data
                science and artificial intelligence. I spend most of my time
                researching and learning about the data science process that
                starts at the data acquisition and finishes at data
                visualization, going through all steps, such as data scraping,
                data cleansing, wrangling and exploration, the model conception,
                and so on.
              </p>
            </div>

            <div style={{ textIndent: "2em" }}>
              <p>
                So, talking a little bit about my Ph.D., I am researching about
                modeling the availability and performance of object detection in
                edge and fog computing environments. So far, in the literature,
                there is not a clear-cut difference between fog and edge
                computing, which may be confusing when defining edge and fog
                environments; however, it is essential to differentiate both
                paradigms. Edge computing concentrates on the end-devices side,
                while fog computing concentrates on the infrastructure. Edge
                computing is the layer that performs local computing or sensor
                metering. It is worth pointing out that edge computing
                environments run specific applications in the end-devices (e.g.,
                self-driving cars, healthcare monitors, etc.). On the other
                hand, fog computing is an extension of the cloud computing
                paradigm, where the computational resources are extended to near
                the edge devices. Services are also provided by fog computing
                environments, which can be used through the Internet or private
                networks. My Master's dissertation was about autoscaling of
                virtual machines in cloud computing environments, where I used
                time-series forecasting to predict the most suitable moment to
                perform the scaling activity. Therefore, using my approach, it
                is possible to decrease the performance degradation of cloud
                environments.
              </p>
            </div>

            <div style={{ textIndent: "2em" }}>
              <p>
                I am also a Linux enthusiastic, I love writing scripts and code
                on Linux terminal. I am also all about the open-source
                philosophy, which seeks to achieve a culture that engages in
                collective freedom via freedom of expression, free public access
                to knowledge and information, full demonstration of creativity
                and innovation in various arenas and promotion of citizen
                liberties.
              </p>
            </div>
            <div style={{ textIndent: "2em" }}>
              <p>
                And besides all the computing stuff, my greatest passion in life
                is traveling to other countries, where I can meet different
                people and places. I think traveling is one of the greatest
                gifts we can give to ourselves. I feel really blessed to see
                different cultures and places. To finish I would like to quote
                Anthony Bourdain:{" "}
                <p
                  style={{
                    textIndent: "0em",
                    fontWeight: "bold",
                    width: "75%",
                    margin: "auto",
                    paddingTop: "3em",
                  }}
                >
                  "Travel isn't always pretty. It isn't always comfortable.
                  Sometimes it hurts, it even breaks your heart. But that's
                  okay. The journey changes you; it should change you. It leaves
                  marks on your memory, on your consciousness, on your heart,
                  and on your body. You take something with you. Hopefully, you
                  leave something good behind."
                </p>
              </p>
            </div>
            <Cell
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
              }}
            >
              <div id="photo-deck">
                <Deck cards={PHOTOS} />
              </div>
            </Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutPage;
