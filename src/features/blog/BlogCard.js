import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class BlogCard extends Component {
  render() {
    let blog = this.props.blog;

    return (
      <>
        <Card className='card'>
          <a href={blog.link}>
            <Image src={blog.thumbnail} className='blog-card-image' />
          </a>

          <Card.Content>
            <Card.Header>
              <span className='blog-title'>{blog.title}</span>
            </Card.Header>
            <Card.Description></Card.Description>
            <p>
              Published by <span className='blog-author'>{blog.author}</span>
            </p>
            <p>
              Date: <span className='blog-date'>{blog.pubDate}</span>
            </p>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default BlogCard;
