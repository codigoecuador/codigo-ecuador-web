import React from 'react'
import { Button } from 'semantic-ui-react'

const Contact = () => {
    return (
        <div>
        <h2 className="center">Contact us if you can help!</h2>
          <div className="contact-info center">
            <b>Phone:</b> +1 571-216-5441 <br/>
            <b>Email:</b> info@codigoecuador.com<a href="mailto:info@codigoecuador.com"> <i class="envelope outline icon"></i></a><br/>
            <b>Twitter:</b> @CodigoEC<a href="https://twitter.com/CodigoEC" target="_blank"> <i class="twitter icon"></i></a><br/>
            <br/><Button ><a href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD' target="_blank">Donate Now</a></Button>
            <br/><br/><div className="center">Código Ecuador is a 501(C)(3) organization under the International Intellectual Exchange Initiative Inc. </div>
          </div>
          <br/>
        </div>
    )
}

export default Contact
