import React from 'react'
import { Grid, Container, Image } from 'semantic-ui-react'

const AboutBlurb = () => {
    return (
        <div>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                <h1>First Column</h1>
                <Image src="https://static.wixstatic.com/media/6ec8ab5092ba4daa8db8d3106847341d.jpg/v1/crop/x_1049,y_0,w_2909,h_3414/fill/w_920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/Smiling%20Student.webp" />

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
          </Container>

        </div>
    )
}

export default AboutBlurb
