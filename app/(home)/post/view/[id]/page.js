import { postPreview } from "@/app/backend/db/actions/post";
import PostPage from "@/components/PostPage";
export const dynamic = "force-dynamic";
async function PreviewPost({ params }) {
  const { id } = await params;
  const Post = await postPreview(id);

  return (
    <>
      <PostPage id={id} Post={Post} />
    </>
  );
}
export default PreviewPost;
