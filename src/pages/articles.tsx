import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Article } from "@models/article";

interface Props {
  articles: Article[];
}

const Articles: NextPage<Props> = ({ articles }: Props) => {
  if (articles.length === 0) return null;
  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <ReactMarkdown plugins={[gfm]}>{article.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const request = await fetch("http://134.209.198.0/lifestyles");
  const response = await request.json();

  return {
    props: {
      articles: response,
    },
  };
};

export default Articles;
