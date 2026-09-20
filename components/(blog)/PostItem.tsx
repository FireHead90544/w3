import React from 'react';
import Link from 'next/link';
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";
import { formatDate } from '@/lib/utils';

interface PostItemProps {    
    title: string,
    slug: string,
    publish_date: string,
    reference?: string
}

const PostItem = ({ post, id }: { post: PostItemProps, id: number }) => {
  return (
    <Link className="flex justify-between select-none" href={post.reference ?? `/blog/${post.slug}`}
      target={post.reference ? "_blank" : undefined}
      rel={post.reference ? "noopener noreferrer" : undefined}
    >
        <div className="flex space-x-5 w-full duration-200 hover:text-muted-foreground">
            <span>{id}</span>
            <div className="flex flex-col justify-between sm:w-full sm:flex-row">
              <div className="flex items-center">
                <span className="underline decoration-border underline-offset-[6.5px]">{post.title.toLowerCase()}</span>
                {post.reference && <ArrowTopRight className="relative -top-1 scale-75" />}
              </div>
                <time dateTime={post.publish_date} className="text-base text-muted-foreground">{formatDate(post.publish_date)}</time>
            </div>
        </div>
    </Link>
  );
}

export default PostItem