import React, { Component } from "react";
import { connect } from "react-redux";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

class Blog extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    return fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/código-ecuador`
    )
      .then(response => response.json())
      .then(blogs => this.setState({ blogs: blogs }));
  }

  render() {
    let num = this.props.size === "mobile" ? 1 : 3;

    if (!this.state.blogs.items) {
      return <div className="blog-container">No blog posts at the moment!</div>;
    } else {
      const { items } = this.state.blogs;

      let settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: num,
        slidesToScroll: 1,
        autoplay: false,
        autoplayspeed: 8000,
        className: "blog-slider"
      };

      return (
        <>
          <div className="main-container">
            <div className="headline banner-headline">
              <span className="gold">Recent Blog Posts</span>
            </div>
            <br />
            <br />

            <Slider {...settings}>
              {items.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
              <br />
            </Slider>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return { size: state.size.size };
};

export default connect(mapStateToProps)(Blog);
