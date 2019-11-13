import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'


const languageOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
]

const LanguageToggle = (props) => {
    return (
      <Dropdown
        button
        className='icon'
        floating
        labeled
        icon='world'
        options={languageOptions}
        search
        text='Select Language'
      /> 
    )
}

const mapStateToProps = state => {  return {  language: state.language  } }

const mapDispatchToProps = dispatch => ({ 
	setLanguage: language => dispatch({type: "SET_LANGUAGE", language}) 
}) 


export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle)
