import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import { PostCard } from "@/src/types/post/page";
import Container from "@/src/components/elements/container/page";
import LatestPostPreview from "@/src/components/post/PostPreview/LatestPost/page";

export default function LatestPost() {
  const postMetadata = PostMetadata();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {postMetadata.slice(5, 11).map((data: PostCard) => (
          <div key={data.id}>
            <LatestPostPreview datas={data} key={data.id} />
          </div>
        ))}
      </div>
    </Container>
  );
}
