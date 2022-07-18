import React from "react";

function BlogContent(props) {
  console.log(props)
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
