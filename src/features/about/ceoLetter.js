import React from 'react'
import { ceoLetterText } from '../../common/aboutText/ceoLetterText'

const CeoLetter = () => {

  return (
    <div className="bubble">
      <div className=" ceo-letter-headline">
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



export default CeoLetter
