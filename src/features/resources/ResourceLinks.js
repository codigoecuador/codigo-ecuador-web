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
      case("Student"):
      resourceItems = studentLinks
      break;

      case("Parent"):
      resourceItems = parentLinks
      break;

      case("Educator"):
      resourceItems = educatorLinks
      break;

      case("Entrepreneur"):
      resourceItems = entrepreneurLinks
      break;

      default:
      resourceItems = studentLinks
    }




    return (
        <div>
            {resourceItems.map(resource=>
              <div className="resource">
                <br/>
                <div className="large resourceItemTitle">{resource.title}</div>
                <br/>
                <div className="resourceItemSubtitle">{resource.subtitle}</div>

                <br/>
                <br/>

                <div className="right">
                  <button className="resourceItemButton"><a href={resource.buttonLink}>Learn More</a></button>
                </div>
                <br/>
                <Divider className="resourcesItemDivider"/>
              </div>

            )}
        </div>
    )

  }

}

export default ResourceLinks
