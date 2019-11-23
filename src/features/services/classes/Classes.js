import React from "react";
import { connect } from "react-redux";
import { Container, Divider } from "semantic-ui-react";
import "./Classes.css";
import { classesText } from "../../../common/servicesText/classesText";
// import { labeledStatement } from "@babel/types";
import { pythonText } from "../../../common/servicesText/pythonText";

function Classes(props) {
  const lang = localStorage.getItem("language");
  const headline = classesText[lang];
  const generatePythonClasses = () => {
    return pythonText[lang].map(course => (
      <div className={`course-info ${course.color}`}>
        <br />
        <div className='large python-title'>{course.title}</div>
        <br />
        <h2>{course.duration}</h2>

        <div className='python-description'>{course.description}</div>
        <br />
        <div className='python-bullets'>
          {course.bulletPoints.map(point => (
            <ul>
              <li>{point}</li>
            </ul>
          ))}
        </div>
        <br />
        <Divider />
      </div>
    ));
  };

  let coursesStyle;
  props.size === "mobile"
    ? (coursesStyle = "courses-mobile")
    : (coursesStyle = "courses-desktop");

  return (
    <Container className={coursesStyle}>
      <div className='courses-text'>
        <div className='center headline'>
          <span className='gold'>{headline.goldTitle}</span>
          <span className='navy'>{headline.navyTitle}</span>
        </div>
        {headline.text}
      </div>
      <br />
      <br />

      {generatePythonClasses()}
    </Container>
  );
}

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Classes);
