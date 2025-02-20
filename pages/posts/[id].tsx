import { PostType } from "@/src/post.type";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import router from "next/router";

type PostProps = {
  post: PostType | null;
  id: number;
};

const Post: NextPage<PostProps> = ({ post, id }) => {
  if (!post) {
    return (
      <div>
        <Link href="/">Back</Link>
        <p className="text-red-800">This post does not exist</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 m-4">
      <Link href="/">Back</Link>
      <h1 className="text-4xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  PostProps,
  { id: string }
> = async (context) => {
  const id = context.params?.id

  if (!id) {
    return {notFound : true}
  }

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return {
    props: {
      post,
      id: Number(id)
    },
  };
};

export default Post;
