import { useRouter } from "next/router";
import React from "react";

const DynamicRoutes = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <h3 className="text-green-500">{data.body}</h3>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default DynamicRoutes;
