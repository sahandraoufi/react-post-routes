import React from "react";
import { useResolvedPath, Link } from "react-router-dom";


/*
  TODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the useRouteMatch() hook from "react-router-dom" to get the current URL path
*/

export const PostLink = ({ post }) => {
  const url = useResolvedPath("").pathname;
  
  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;