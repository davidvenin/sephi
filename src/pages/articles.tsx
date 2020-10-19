import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Article } from "@models/article";
import Post from "@components/post";

interface Props {
  articles: Article[];
}

const Articles: NextPage<Props> = ({ articles }: Props) => {
  if (articles.length === 0) return null;
  return (
    <div>
      {articles.map((article: Article) => (
        <Post key={article.id} post={article} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const request = await fetch(`${process.env.API_URL}/lifestyles`);
  const response = await request.json();
  return {
    props: {
      articles: response,
    },
  };
};

export default Articles;
