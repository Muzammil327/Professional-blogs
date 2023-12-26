import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/post/PostMetadata/page";
import path from "path";

const getPostContent = (slug: string, directories: string[]) => {
  for (const directory of directories) {
    const folder = path.join(process.cwd(), directory);
    const file = path.join(folder, `${slug}.md`);

    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      const matterResult = matter(content);
      return matterResult;
    }
  }

  return null;
};

// Example usage
const directories = [
  "src/app/posts/docs/download/",
  "src/app/posts/docs/fashion/",
];

// const getPostContent = (slug: string) => {
//   const folder = "src/app/posts/docs/download/";

//   // const file = `${folder}${slug}.md`;
//   const file = path.join(folder, `${slug}.md`);

//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  // const post = getPostContent(slug);
  const post = getPostContent(slug, directories);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post?.data.title}</h1>
        <p className="text-slate-400 mt-2">{post?.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post?.content || ""}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
