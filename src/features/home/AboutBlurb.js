import React from 'react'
import { Grid } from 'semantic-ui-react'

const AboutBlurb = () => {
    return (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
              <h1>First Column</h1>
              <h1>A Distinct Identity</h1>

              <p>
              Código Ecuador is a nonprofit organization working to promote technology skills and computer programming careers for high school students in Ecuador, with a focus on female empowerment. We believe that improving access to computer science curricula can promote global equity, and that collective action can greatly impact the world.
              </p>
              </Grid.Column>

              <Grid.Column width={8}>
              <h1>Second Column</h1>
              <h1>A Distinct Identity</h1>

              <p>
              Código Ecuador is a nonprofit organization working to promote technology skills and computer programming careers for high school students in Ecuador, with a focus on female empowerment. We believe that improving access to computer science curricula can promote global equity, and that collective action can greatly impact the world.
              </p>
              </Grid.Column>
            </Grid.Row>


          </Grid>

        </div>
    )
}

export default AboutBlurb
