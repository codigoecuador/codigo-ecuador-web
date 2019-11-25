import React, { Component } from "react"
import { connect } from 'react-redux'
import "./Blog.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import BlogCard from "./BlogCard"

class Blog extends Component {
	state = {
		blogs: []
	}

	componentDidMount() {
		return fetch(
			`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@codigoecuador`
		)
			.then(response => response.json())
			.then(blogs => this.setState({ blogs: blogs }))
	}
	//react carousel installed with < npm i @brainhubeu/react-carousel > in the terminal

	render() {

		if (!this.state.blogs.items) {
			return (
				<div className="blog-container">No blog posts at the moment!</div>
			)
		} else {
			const { items } = this.state.blogs

			let settings = {
				dots: true,
				infinite: true,
				speed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplayspeed: 8000
			}

			return (
				<>
					<div className="blog-container">
						<hr className="blog-divider"/>
						<div className="headline">
							<span className="gold">Recent</span>
							<span className="navy"> Blog Posts</span>
						</div>
						<br/>
						<br/>

						<Slider {...settings}>
							{items.map((blog, index) => (
								<BlogCard key={index} blog={blog} />
							))}

							<br />
						</Slider>
					</div>
				</>
			)
		}
	}
}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Blog)
