import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          style={{ fontFamily: "Oxygen, sans-serif" }}
          title={
            <Link
              to="/"
              style={{
                fontFamily: "Oxygen, sans-serif",
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          style={{ fontFamily: "Oxygen, sans-serif" }}
          title={
            <Link
              to="/"
              style={{
                fontFamily: "Oxygen, sans-serif",
                color: "rgb(66,66,66)",
                textDecoration: "none",
              }}
            >
              Paulo Pereira
            </Link>
          }
        >
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
