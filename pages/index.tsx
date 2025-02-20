import type { GetServerSideProps, NextPage } from "next";
import { PostLink } from "../src/PostLink";
import { PostType } from "../src/post.type";

type HomeProps = {
  posts: PostType[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="flex flex-col items-start gap-4 m-4">
      <h1 className="text-4xl">NextReact</h1>
      {posts.map((post) => (
        <PostLink {...post} key={post.id} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // 🦁 Récupérer les posts et les passer en props

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
