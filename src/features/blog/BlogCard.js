import React, { Component } from "react"
import { Card, Image } from "semantic-ui-react"

class BlogCard extends Component {
	render() {
		let blog = this.props.blog

		blog.title = blog.title.replace("&amp;", "&")

		return (
			<>
				<Card className="blog-card">
					<a href={blog.link}>
						<Image
							src={blog.thumbnail}
							className="blog-card-image"
						/>
					</a>

					<Card.Content>
					  <Card.Description>
							<span className="blog-title">{blog.title}</span>
						</Card.Description>

						<p>
							Date:{" "}
							<span className="blog-date">{blog.pubDate}</span>
						</p>
					</Card.Content>
				</Card>
			</>
		)
	}
}

export default BlogCard
