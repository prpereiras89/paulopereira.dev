import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutPage from "./aboutme";
import ContactPage from "./contact";
import ProjectsPage from "./projects";
import ResumePage from "./resume";
import PublicationsPage from "./publications";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutPage} />
    <Route path="/resume" component={ResumePage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/publications" component={PublicationsPage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);

export default Main;
