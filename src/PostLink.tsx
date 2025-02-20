import Link from 'next/link';
import { PostType } from './post.type';

export const PostLink = ({ title, id }: PostType) => {
  return (
    <Link href={`/posts/${id}`} passHref>
      <a className="w-full inline-flex gap-2 items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 border-2 border-gray-200">
        <span className="bg-blue-200 px-4 py-2 rounded-full">{id}</span>
        <span className="w-full">{title}</span>
      </a>
    </Link>
  );
};
