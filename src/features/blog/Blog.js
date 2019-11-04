import React, {Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Image} from 'semantic-ui-react'


class Blog extends Component {
    state = {
        blogs: []
    }

  componentDidMount(){
    return fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@codigoecuador`)
    .then(response => response.json())
    .then(blogs =>   this.setState({blogs: blogs})
    );
   }
   //react carousel installed with < npm i @brainhubeu/react-carousel > in the terminal


  render(){
    if(!this.state.blogs.items){
      return <div className='blog-container'>No blog posts at the moment!</div>
    } else {

      const {items} = this.state.blogs
      var settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 8000
      }

      return (
        <>
          <div className='blog-container'>
            <h1 className='blog-account massive center'>Our Blog</h1>
            <Slider {...settings}>
              {items.map((blog,index)=>(

              <Card className="card">
                <a href={blog.link} target='_blank'><Image src={blog.thumbnail} className='blog-card-image'/></a>

                <Card.Content>
                  <Card.Header ><span className='blog-title'>{blog.title}</span></Card.Header>
                  <Card.Description></Card.Description>
                  <p>Published by <span className='blog-author'>{blog.author}</span></p>
                  <p>Date: <span className='blog-date'>{blog.pubDate}</span></p>
                </Card.Content>
               </Card>
              ))}

              <br/>
            </Slider>
          </div>
        </>
      )
    }
  }
}

export default Blog
