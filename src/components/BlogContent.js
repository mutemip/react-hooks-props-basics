import React from "react";

//distructuring props
function BlogContent({isPublished, articleText, minutesToRead}) {
  //console.log(props)
  if (!isPublished){
    return null;
  }else{
    return(
      <div>
        <h1>{articleText}</h1>
        <p>{minutesToRead} minutes to read</p>
      </div>
    )
  }
  // return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
