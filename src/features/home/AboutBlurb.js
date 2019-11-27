import React from "react";
import { aboutBlurbText } from "../../common/homeText/aboutBlurbText";

<<<<<<< Updated upstream
const AboutBlurb = () => {
  return (
    <div className="bubble">
      <br />
      <div className="home-headline">
        {aboutBlurbText[localStorage.getItem("language")].title}
      </div>

      <p>{aboutBlurbText[localStorage.getItem("language")].text}</p>
    </div>
  );
};

export default AboutBlurb;
=======
class AboutBlurb extends Component {
    render() {

        return ( <
            div className = "bubble" >
            <
            br / >
            <
            div className = "home-headline" > { aboutBlurbText[localStorage.getItem("language")].title } <
            /div> { aboutBlurbText[localStorage.getItem("language")].text } < /
            div >
        )
    }

}

const mapStateToProps = state => {  return {  language: state.language  } }

export default connect(mapStateToProps)(AboutBlurb)
>>>>>>> Stashed changes
