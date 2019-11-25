import React, { Component } from "react"
import { connect } from "react-redux"
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
			.then((response) => response.json())
			.then((blogs) => this.setState({ blogs: blogs }))
	}


	render() {


		if (!this.state.blogs.items) {
			return (
				<div className="blog-container">
					No blog posts at the moment!
				</div>
			)
		} else {
			const { items } = this.state.blogs

			let settings = {
				dots: true,
				infinite: true,
				speed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplayspeed: 8000,
				className: "blog-slider"
			}

			return (
				<>
					<div className="blog-container">
						<div className="headline blog-headline-container">
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
			)
		}
	}
}

export default Blog

// const mapStateToProps = (state) => {
// 	return { size: state.size }
// }

// export default connect(mapStateToProps)(Blog)
