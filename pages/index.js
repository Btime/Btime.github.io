import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index({ posts }) {
  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <Link
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <li key={post.filePath} className="card--btime">
              <h3>{post.data.title}</h3>
              <p>{post.data?.description}</p>
            </li>
          </Link>
        ))}
      </ul>
      <style jsx>
        {`
          .card--btime {
            padding: 2rem;
            margin: 1rem;
            border-radius: 6px;
            box-shadow: 0 0 8px 0 rgba(83, 83, 83, 0.5);
            cursor: pointer;
          }
        `}
      </style>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
