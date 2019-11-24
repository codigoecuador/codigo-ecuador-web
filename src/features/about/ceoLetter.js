import React from 'react'
import { connect } from 'react-redux'
import { ceoLetterText } from '../../common/featuresText/ceoLetterText'

const CeoLetter = () => {
  // const [language, setLanguage ] = useState("EN")

  return (
    <div className="bubble">
      <div className=" headline ceo-letter-headline">
        <span className="gold">
          {ceoLetterText[localStorage.getItem("language")].goldTitle}
        </span>

        <span className="navy">
          {ceoLetterText[localStorage.getItem("language")].navyTitle}
        </span>

      </div>
        <i className="ceo-letter-text">
          {ceoLetterText[localStorage.getItem("language")].text}
        </i>
      <br/>
    </div>
  )
}

const mapStateToProps = state => {  return {  language: state.language  } }

export default connect(mapStateToProps)(CeoLetter)
