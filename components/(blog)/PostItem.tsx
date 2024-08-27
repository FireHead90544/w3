import React from 'react'

interface PostItemProps {    
    title: string,
    slug: string | null,
    publish_date: string
}

const PostItem = ({ post, id }: { post: PostItemProps, id: number }) => {
  return (
    <div className="flex justify-between cursor-pointer select-none">
        <div className="w-full flex flex-col sm:flex-row justify-between">
            <div className="space-x-5">
                <span className="">{id}</span>
                <span className="border-b-2">{post.title}</span>
            </div>
            <span className="text-base text-muted-foreground">{post.publish_date}</span>
        </div>
    </div>
  );
}

export default PostItem