import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const BlogLoader = () => (
  <Dimmer active>
    <Loader />
  </Dimmer>
);

export default BlogLoader;
