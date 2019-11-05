import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { studentLinks } from './StudentLinks'
import { entrepreneurLinks } from './EntrepreneurLinks'
import { educatorLinks } from './EducatorLinks'
import { parentLinks } from './ParentLinks'

class ResourceLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  render(){
    console.log(this.props)

    let resourceItems

    switch(this.props.type){
      case("students"):
      resourceItems = studentLinks
      break;

      case("parents"):
      resourceItems = parentLinks
      break;

      case("educators"):
      resourceItems = educatorLinks
      break;

      case("entrepreneurs"):
      resourceItems = entrepreneurLinks
      break;

      default:
      resourceItems = studentLinks
    }




    return (
        <div>
            {resourceItems.map(resource=>
              <div className="resource">
                <h1>{resource.title}</h1>
                <h3>{resource.subtitle}</h3>
                <button className="resourceItemButton"><a href={resource.buttonLink}>Learn More</a></button>
                <br/>
                <br/>
                <Divider />
              </div>

            )}
        </div>
    )

  }

}

export default ResourceLinks
