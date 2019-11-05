import React from 'react'
import { Popup } from 'semantic-ui-react'

const Contact = () => {
    return (
      <>
        <div className="center large">Contact us if you can help!</div>
          <br/>
          <br/>
          <a href="mailto: info@codigoecuador.com" ><Popup content='email us' trigger={<i class="mail icon big" />} /></a>
          <a href="https://www.linkedin.com/company/codigo-ecuador"><i class="linkedin icon big" /></a>
          <a href="https://twitter.com/CodigoEC">
            <Popup content='Follow us on Twitter' trigger={<i class="twitter icon big" />} /></a>
          <br/>
          <i className="phone big"/>
          <b>Phone:</b> +1 571-216-5441<br/>
          <br/>
          <br/>
          <br/>


          <button className='donateButton'><a href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD'>donate now</a></button>
          <br/>
          <br/>

          <div className="center">
            Código Ecuador is a 501(C)(3) organization under the  International Intellectual Exchange Initiative Inc.
          </div>
        </>

  )
}

export default Contact
