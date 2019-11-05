import React, { Component }  from 'react'
import { Button, Image} from 'semantic-ui-react'



class ActivityCard extends Component {
    render(){

      return (
        <>
          <div className="activityCard">
              <Image className="center" src={this.props.image}/>

              <div>
                  <div className="activityCardHeadline">{this.props.title}</div>
                  <div className="subhead"><i>{this.props.subtitle}</i></div>
                  <div className="activityCardText">{this.props.description}</div>
              </div>

              <div className='center' extra >
                <Button ><a href={this.props.buttonLink}>{this.props.buttonText}</a></Button>
              </div>
          </div>
        </>
      )

    }


}

export default ActivityCard
