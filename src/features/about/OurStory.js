import React from 'react'
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className="bubble">
          <div className="headline">
            <span className="gold">Our</span><span className="navy"> Story</span>
          </div>


          <p>
          At Código Ecuador, we care about creating a more equal world<br/> between countries and across genders.
          <br/>
          We want to train young women to take on technology careers in Ecuador.
          </p>
          <p>
          Our world has a shortage of technology talent and our global economy is plagued by inequality. Research shows that advancing technological skills in developing countries opens up many opportunities that would not otherwise be possible. <a href="/resources/research"><strong>See the research.</strong></a>
          </p>


          <div className="story-links">
            <Link to='/about/partners'><strong>Partners /</strong></Link>
            <Link to='/about/team'><strong>Team</strong></Link>
          </div>

          <br/>
        </div>
    )
}

export default OurStory
