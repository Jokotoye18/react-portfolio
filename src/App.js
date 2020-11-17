import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { ErrorProvider } from "./context/ErrorContext";
import { MessageProvider } from "./context/MessageContext";
import Header from "./components/header/Header";
import HeaderImage from "./components/header/HeaderImage";
import AboutSection from "./components/AboutSection";
import Project from "./components/Project";
import Footer from "./components/footer/Footer";
import ProjectLoading from "./components/ProjectLoading";
import ErrorPage from "./components/Error404";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Index";
import Education from "./components/education/Index";
import Alert from "./components/Alert";

import "./base.css";

const alertOptions = {
  position: "bottom center",
  timeout: 6000,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      filterProjects: [],
      loaded: false,
    };
  }

  filter = (value) => {
    if (value === "All projects") {
      return this.setState({
        filterProjects: this.state.projects,
      });
    }
    this.setState({
      filterProjects: this.state.projects.filter(
        (project) => project.project_tech === value
      ),
    });
  };

  componentDidMount() {
    axios
      .get(
        "https://jokotoye18-portfolio.herokuapp.com/api/portfolio-list/?format=json"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          projects: response.data,
          filterProjects: response.data,
          loaded: true,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  render() {
    console.log(this.state.filterProjects);
    return (
      <MessageProvider>
        <ErrorProvider>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Header />
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return (
                    <>
                      <HeaderImage />
                      <main>
                        <AboutSection />
                        {!this.state.loaded ? (
                          <ProjectLoading />
                        ) : (
                          <Project
                            projects={this.state.projects}
                            filterProjects={this.state.filterProjects}
                            filter={this.filter}
                          />
                        )}
                        <Certification />
                        <Contact />
                        <Education />
                      </main>
                      <Footer />
                    </>
                  );
                }}
              ></Route>
              <Route component={ErrorPage} />
            </Switch>
          </AlertProvider>
        </ErrorProvider>
      </MessageProvider>
    );
  }
}

export default App;
