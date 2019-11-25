import React, { Component } from "react";
import { Container } from "semantic-ui-react"
import "./boardOfDirectors.css"
import { connect } from "react-redux";
import { boardDataDesktop } from "./boardDataDesktop"
import { boardDataMobile } from "./boardDataMobile"

class BoardOfDirectors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
     }
   }
  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange)
   }
  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange)
   }
  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth })
   }

  render(){

    let isMobile
    const width = this.state.width
    width <= 700 ? isMobile = true : isMobile = false

    let boardData;
    isMobile ? boardData = boardDataMobile : boardData = boardDataDesktop

    return (
      <>
        <Container className="board-container">
            <div className="headline board-headline"><span className="gold">Board of</span><span className="navy"> Directors</span></div>
          {boardData}
        </Container>
        <br/>
        <br/>
        <br/>
      </>

    )
  }
}


const mapStateToProps = state => {
  return { size: state.size };
};

export default connect(mapStateToProps)(BoardOfDirectors);
