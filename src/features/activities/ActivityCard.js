import React, { Component }  from 'react'
import { Card, Button, Image} from 'semantic-ui-react'



class ActivityCard extends Component {

    handleChange = () => {
      alert('you hovered here')
    }

    render(){

      return (
          <Card onmouseover={this.handleChange}>
              <Image src={this.props.image}/>
              <Card.Content >
                  <Card.Header>{this.props.title}</Card.Header>
                  <h3><i>{this.props.subtitle}</i></h3>
                  <Card.Description>{this.props.description}</Card.Description>
              </Card.Content>
              <Card.Content className='center' extra >
                  <Button ><a href={this.props.buttonLink}>{this.props.buttonText}</a></Button>
              </Card.Content>
          </Card>
      )

    }


}

export default ActivityCard
