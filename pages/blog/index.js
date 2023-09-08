import Link from "next/link";
import React from "react";

const Blog = ({ posts }) => {
  console.log(posts);

  return (
    <div className="ml-10">
      <h1>Blog Post !!</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index} className="underline text-blue-400">
              <Link href="">{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
