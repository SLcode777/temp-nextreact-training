import Link from 'next/link';
import { PostType } from './post.type';

type PostProps = { post: PostType };

export const Post = ({ post }: PostProps) => {
  return (
    <div className="flex flex-col items-center gap-4 m-4">
      <Link passHref href="/">
        <a className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
          Back
        </a>
      </Link>

      <h1 className="text-4xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
