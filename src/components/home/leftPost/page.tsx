import React from "react";
import LPostPreview from "@/src/components/post/PostPreview/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import { PostCard } from "@/src/types/post/page";

export default function LeftPost() {
  const postMetadata = PostMetadata();

  return (
    <>
      <div className="grid grid-cols-1">
        {postMetadata.slice(6, 12).map((data: PostCard) => (
          <div key={data.id}>
            <LPostPreview datas={data} key={data.id}/>
          </div>
        ))}
      </div>
    </>
  );
}
