import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'

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
            debugger
           
             if(this.state.blogs.items){
                const {items} = this.state.blogs
                return(
                     <div>
                         <h1><a href={`${this.state.blogs.feed.url}`}>{this.state.blogs.feed.title}</a></h1>
                         <ul>
                             {items.map((blog,index) =>(
                                 <div>  <li> <h1> <i>{blog.title}</i></h1>{ ReactHtmlParser (blog.description) }</li>
                            <p>-------------------------------------------------------------------------------------------------------------------------</p>
                                </div>
                             ))}
                         </ul>
        

                      </div>
                    )}else{
                 return (
                <div>No blogs</div>
            )
        }
    }}
    



export default Blog
