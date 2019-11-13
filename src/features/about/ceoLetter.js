import React, {useState} from 'react'
import { connect } from 'react-redux'
import { ceoLetterTextEnglish } from './ceoLetterTextEnglish'

const CeoLetter = () => {
  const [language, setLanguage ] = useState("EN")




    return (
        <div className="bubble">
          <div className=" headline ceo-letter-headline">
            <span className="gold">Letter From</span><span className="navy"> Our CEO</span>
          </div>
            <i className="ceo-letter-text">
              {ceoLetterTextEnglish}
            </i>

          <br/>
        </div>
    )
}


const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(CeoLetter)
