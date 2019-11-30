import React, { Component } from "react";
import { connect } from "react-redux";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import { blogText } from "../../common/blogText/blogText";
import BlogLoader from "./BlogLoader";

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
    let lang = localStorage.getItem("language");

    let num;
    if (window.innerWidth > 1200) {
      num = 3;
    } else if (window.innerWidth > 800) {
      num = 2;
    } else {
      num = 1;
    }

    if (!this.state.blogs.items) {
      return (
        <div className="blog-container">
          <BlogLoader />
        </div>
      );
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
              <span className="gold">{blogText[lang].title}</span>
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
  return { size: state.size, language: state.language };
};

export default connect(mapStateToProps)(Blog);

//return <div className="blog-container">{blogText[lang].error}</div>;
