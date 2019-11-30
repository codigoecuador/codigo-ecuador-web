import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class BlogCard extends Component {
  render() {
    let blog = this.props.blog;

    blog.title = blog.title.replace("&amp;", "&");
    let year = blog.pubDate.split("-")[0];
    let month = blog.pubDate.split("-")[1];
    let date = blog.pubDate.split("-")[2].slice(0, 2);

    let months = {
      1: "Jan.",
      2: "Feb",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "Aug.",
      9: "Sept.",
      10: "Oct.",
      11: "Nov.",
      12: "Dec."
    };

    let monthName = months[parseInt(month)];

    return (
      <>
        <Card className="blog-card">
          <a href={blog.link}>
            <Image src={blog.thumbnail} className="blog-card-image" />
          </a>

          <Card.Content>
            <Card.Description>
              <span className="blog-title">{blog.title}</span>
            </Card.Description>
            <br />
            <div>by {blog.author}</div>

            <p>
              Date:
              <span className="blog-date">
                {monthName} {date}, {year}
              </span>
            </p>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default BlogCard;
