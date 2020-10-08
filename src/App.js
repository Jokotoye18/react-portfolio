import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios'
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {ErrorProvider} from './context/ErrorContext'
import Header from './components/header/Header';
import HeaderImage from './components/header/HeaderImage'
import AboutSection from './components/AboutSection'
import Project from './components/Project';
import Footer from './components/footer/Footer'
import ProjectLoading from './components/ProjectLoading'
import ErrorPage from './components/Error404'
import Certification from './components/certification/Certification'
import Contact from './components/contact/Index'
import Education from './components/education/Index'
import Alert from './components/Alert'

import  './base.css';


const alertOptions = {
  position: 'bottom center',
  timeout: 6000,
}

class App extends Component {
  state = {
    projects: [],
    loaded: false,
  }

  componentDidMount() {
    axios.get('https://jokotoye18-portfolio.herokuapp.com/api/portfolio-list/?format=json')
      .then(response => this.setState({projects: response.data, loaded: true}))
      .catch(err => {
        alert(err.message)
      })
  }

  render() {
    return (
    <ErrorProvider>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Header />
      <Alert />
      <Switch>
        <Route exact path='/' render={props => {
          return <>
          <HeaderImage />
          <main>
            <AboutSection />
            {!this.state.loaded? <ProjectLoading />: <Project projects={this.state.projects} />}
            <Certification />
            <Contact />
            <Education />
          </main>
          <Footer />
          </>
        }}></Route>
        <Route component={ErrorPage} />
      </Switch>
    </AlertProvider>
    </ErrorProvider>
    )
  }
}

export default App
