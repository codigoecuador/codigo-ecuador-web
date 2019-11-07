import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { studentLinks } from './StudentLinks'
import { entrepreneurLinks } from './EntrepreneurLinks'
import { educatorLinks } from './EducatorLinks'
import { parentLinks } from './ParentLinks'

class CodingLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  render(){
    console.log(this.props)

    let codingItems

    switch(this.props.type){
      case("Student"):
      codingItems = studentLinks
      break;

      case("Parent"):
      codingItems = parentLinks
      break;

      case("Educator"):
      codingItems = educatorLinks
      break;

      case("Entrepreneur"):
      codingItems = entrepreneurLinks
      break;

      default:
      codingItems = studentLinks
    }

    return (
        <div>
            {codingItems.map(resource =>
              <div className="resource">
                <br/>
                <div className="large coding-item-title">{resource.title}</div>
                <br/>
                <div className="coding-item-subtitle">{resource.subtitle}</div>
                <br/>
                <br/>

                <div className="right">
                  <button className="coding-item-button"><a href={resource.buttonLink}>Learn More</a></button>
                </div>
                <br/>
                <Divider className="coding-item-divider"/>
              </div>

            )}
        </div>
    )

  }

}

export default CodingLinks
