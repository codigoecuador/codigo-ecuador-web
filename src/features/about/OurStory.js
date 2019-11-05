import React from 'react'
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className="bubble">
          <div className="headline">
            <span className="gold">Our</span><span className="navy"> Story</span>
          </div>
          <br/>
          <br/>

          <p>
          At Código Ecuador, we care about creating a more equal world<br/> between countries and across genders.
          <br/>
          We want to train young women to take on technology careers in Ecuador.
          </p>
          <p>
          Our world has a shortage of technology talent and our global economy is plagued by inequality. Advancing technological skills in developing countries opens up many opportunities that would not otherwise be possible.
          </p>
          <Link to='/about/partners'>Partners / </Link>

          <Link to='/about/team'>Team</Link>

          <br/>
        </div>
    )
}

export default OurStory
