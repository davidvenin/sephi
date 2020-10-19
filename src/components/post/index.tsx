import React, { FunctionComponent } from "react";
import { Article } from "@models/article";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

interface Props {
  post: Article;
}

const Post: FunctionComponent<Props> = ({ post }: Props) => (
  <div>
    <h2>{post.title}</h2>
    <ReactMarkdown plugins={[remarkGfm]}>{post.content}</ReactMarkdown>
  </div>
);

export default Post;
