import React from "react";
import { connect } from "react-redux";
import { Grid, Icon, Popup } from "semantic-ui-react";
import { boardText } from "../../../common/aboutText/boardText";

const BoardDataDesktop = () => {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <div className="board-card center">
            <h1 className="board-header">Debra Ray</h1>
            <div className="board-subhead">
              {boardText[localStorage.getItem("language")].ceoTitle}
            </div>
            <br />
            <div class="description board-description">
              {boardText[localStorage.getItem("language")].ceoQuote}
            </div>
            <br />
            <Popup
              content="Find me on LinkedIn"
              trigger={
                <a href="https://www.linkedin.com/in/debraannray/">
                  <Icon
                    name="linkedin"
                    size="huge"
                    className="blue linked-in"
                  />
                </a>
              }
              position="bottom center"
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="board-card center">
            <img
              className="board-photo"
              src="https://media.licdn.com/dms/image/C4D03AQEX65R-YqCvDw/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=ZLLmNnAa_u3iCWgjD-TNNuQX4K0uhNWZJoklxttN9c0"
              alt="headshot of board member Debra Ray"
            />
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div className="board-card center">
            <img
              className="board-photo"
              src="https://static.wixstatic.com/media/47ab14_85e2c9c81a0a45b6b2b6ee0623d1f9f3~mv2.jpg/v1/fill/w_420,h_442,al_c,q_80,usm_0.66_1.00_0.01/Image%20from%20iOS_edited.webp"
              alt="headshot of board member Tom Sullivan"
            />
          </div>
        </Grid.Column>

        <Grid.Column>
          <div className="board-card center">
            <h1 className="board-header">Tom Sullivan</h1>
            <div className="board-subhead">
              {boardText[localStorage.getItem("language")].presTitle}
            </div>
            <br />
            <div class="description board-description">
              {boardText[localStorage.getItem("language")].presQuote}
            </div>
            <br />
            <Popup
              content="Find me on LinkedIn"
              trigger={
                <a href="https://www.linkedin.com/in/tom-sullivan-a925421a/">
                  <Icon
                    name="linkedin"
                    size="huge"
                    className="blue linked-in"
                  />
                </a>
              }
              position="bottom center"
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(BoardDataDesktop);
