import React, {Component} from 'react'
//react carousel imported
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';


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
      //react carousel installed with < npm i @brainhubeu/react-carousel > in the terminal          


    render(){
             console.log("are my blogs in?",this.state)
           
           
             if(this.state.blogs.items){
                const {items} = this.state.blogs
                var settings = {
                  dots: true,
                  infinite: true,
                  speed: 2000,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplay: true,
                  autoplayspeed: 4000
                };
                return (
                  <div className='blog-container'>
                  <Slider {...settings}>
                    {items.map((blog,index)=>(
                    <div className='card'>
                      <a href={blog.link}><img src={blog.thumbnail} className='blog-card-image'/></a>
                      <p className='blog-title'>{blog.title}</p>
                      <p><span className='blog-author'>{blog.author}</span>  Published on: <span className='blog-date'>{blog.pubDate}</span></p>
                    </div>
                     
                   
                    
                    ))}
                  </Slider>
                  </div>
                );
              }
                   
                       else{
                 return (
                <div>No blogs</div>
            )
        }
    }}
    



export default Blog
