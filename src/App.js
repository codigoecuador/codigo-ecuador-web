import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
//about
import About from "./features/about/About";
import PartnersContainer from "./features/about/partners/partners/PartnersContainer";
import Team from "./features/about/team/Team";
import BoardOfDirectors from "./features/about/boardOfDirectors/BoardOfDirectors";
//services
import Classes from "./features/services/classes/Classes";
import Internships from "./features/services/internships/Internships";
import Mentorship from "./features/services/mentorship/Mentorship";
//research
import CodingContainer from "./features/resources/coding/CodingContainer";
import ResearchContainer from "./features/resources/research/ResearchContainer";
import Blog from "./features/blog/Blog";
import Donate from "./features/donate/Donate";
import Footer from "./features/footer/Footer.js";

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.props.setSize(window.innerWidth);
  };

  render() {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "EN");
    }

    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>

          <Route exact path="/about" render={() => <About />}></Route>
          <Route
            exact
            path="/about/partners"
            render={() => <PartnersContainer />}
          ></Route>
          <Route exact path="/about/team" render={() => <Team />}></Route>
          <Route
            exact
            path="/about/board"
            render={() => <BoardOfDirectors />}
          ></Route>

          <Route
            exact
            path="/services/classes"
            render={() => <Classes />}
          ></Route>
          <Route
            exact
            path="/services/internships"
            render={() => <Internships />}
          ></Route>
          <Route
            exact
            path="/services/mentorship"
            render={() => <Mentorship />}
          ></Route>

          <Route
            exact
            path="/resources/coding"
            render={() => <CodingContainer />}
          ></Route>
          <Route
            exact
            path="/resources/research"
            render={() => <ResearchContainer />}
          ></Route>

          <Route exact path="/blog" render={() => <Blog />}></Route>
          <Route exact path="/donate" render={() => <Donate />}></Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size.size };
};

const mapDispatchToProps = dispatch => ({
  setSize: size => dispatch({ type: "SET_SIZE", size }),
  setLanguage: language => dispatch({ type: "SET_LANGUAGE", language })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
