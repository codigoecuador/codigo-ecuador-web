import React from 'react'
import ActivitiesCards from './ActivitiesCards'
import ActivitiesBackground from './ActivitiesBackground'

const Activities = () => {
    return (
        <>
          <ActivitiesBackground/>
          <ActivitiesCards className="activitiesCards"/>
          <br/>
          <br/>
        </>
    )
}

export default Activities
