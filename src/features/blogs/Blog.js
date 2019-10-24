import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'
import {Link} from 'react-router-dom'

class Blog  extends Component {
    constructor(props){
        super(props)
        this.state={
            blogs: []
        }
    }

            componentDidMount(){
                        return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@burakkocak884`)
                        .then(response => response.json())
                        .then(blogs =>   this.setState({blogs: blogs})
                            );
                }


    render(){
             console.log("are my blogs in?",this.state)
       
           
             if(this.state.blogs.items){
                const {items} = this.state.blogs
                return(

                    
                    
                    <div class="ui link cards">
                         {items.map((blog,index)=>(
                    <div class="card">
                      <div class="image">
                        <img src={`${blog.thumbnail}`}/>
                      </div>
                      <div class="content">
                        <div class="header"><a href={`${blog.link}`} target="_blank" rel="noopener noreferrer">{blog.title}</a></div>
                        <div class="meta">
                          <a></a>
                        </div>
                        <div class="description">
                          #{blog.categories.join('# ')}}
                        </div>
                      </div>
                      <div class="extra content">
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
                        )}else{
                 return (
                <div>No blogs</div>
            )
        }
    }}
    



export default Blog
