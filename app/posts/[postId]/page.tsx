import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

export const generateStaticParams = async () => {
  const posts = await getPostsMeta(); // deduped
  if (!posts) return [];
  return posts.map((post) => {
    postId: post.id;
  });
};

export const generateMetadata = async ({ params: { postId } }: PostProps) => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  if (!post) {
    return {
      title: "Post not found!",
    };
  }

  return {
    title: post.meta.title,
  };
};

const Post = async ({ params: { postId } }: PostProps) => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
};

export default Post;
