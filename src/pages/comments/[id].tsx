import SingleComment from "@/modules/pagesModule/comments/SingleComment";
import { useRouter } from "next/router";
import React from "react";

const Comments = () => {
    const {query}=useRouter()
    
  return <SingleComment query={query}/>;
};

export default Comments;
