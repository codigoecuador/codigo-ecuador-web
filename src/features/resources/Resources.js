import React from 'react'
import { Button, Container } from 'semantic-ui-react'


const Resources = () => {
    return (
      <div className="resources">
        <h1>Resources!</h1>
        <br/>
        <br/>
        <Button.Group vertical>
          <Button>For Entrepreneurs</Button>
          <br/>
          <br/>
          <Button>For Students</Button>
          <br/>
          <br/>
          <Button>For Parents</Button>
          <br/>
          <br/>
          <Button>For Educators</Button>
        </Button.Group>
      </div>
    )
}

export default Resources
