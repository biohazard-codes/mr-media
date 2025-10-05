import EditPostForm from "@/components/EditPostForm";
import { postPreview } from "@/app/backend/db/actions/post";
export const dynamic = "force-dynamic";
async function EditPost({ params }) {
  const { id } = await params;
  const user = await postPreview(id);
  const plainUser = JSON.parse(JSON.stringify(user));

  return (
    <section>
      <EditPostForm user={plainUser} id={id} />
    </section>
  );
}

export default EditPost;
