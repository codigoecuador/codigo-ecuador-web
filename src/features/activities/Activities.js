import React from 'react'
import BrickWallPic from './BrickWallPic'
import QuitoPic from './QuitoPic'
import EducationBlurb from './EducationBlurb'
import InternshipBlurb from './InternshipBlurb'
import EntrpeneurshipBlurb from './EntrepreneurshipBlurb'


const Activities = () => {
    return (
        <>
          <BrickWallPic />
          <QuitoPic />
          <h1>need to make this link to anchor on home page</h1>
          <div className="educationBlurb">
            <EducationBlurb/>
          </div>

          <div className="internshipBlurb">
            <InternshipBlurb/>
          </div>

          <div className="entrepreneurshipBlurb">
            <EntrpeneurshipBlurb/>
          </div>
        </>
    )
}

export default Activities
