import React, { Component } from 'react'

class Blog extends Component {
    state = {
        blogs: []
    }

  componentDidMount(){
    return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@codigoecuador`)
    .then(response => response.json())
    .then(blogs => this.setState({blogs: blogs})
    );
  }

  render(){
    if(!this.state.blogs.items){
      return <div>No blog posts at the moment!</div>
    } else {

      const {items} = this.state.blogs

      return(
        <div className="background-img">
          <div id='card-container' className="ui link cards">
              {items.map((blog,index)=>(
            <div className="card">

              <div className="image">
                <img src={`${blog.thumbnail}`} alt="thumbnail for blog post"/>
              </div>

              <div className="content">
                <div className="header">
                  <a href={`${blog.link}`} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </div>

                <div className="description">
                  #{blog.categories.join('# ')}}
                </div>
              </div>

              <div className="extra content">
                <span class="right floated">
                  {blog.pubDate}
                </span>

                <span>
                  <i class="user icon"></i>
                  {blog.author}
                </span>
              </div>

            </div>
            ))}

          </div>
        </div>
      )}
    }
}

export default Blog
