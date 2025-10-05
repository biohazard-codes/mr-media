import EditForm from "@/components/EditForm";
import { viewUser } from "@/app/backend/db/actions/signup";
export const dynamic = "force-dynamic";
async function EditProfile({ params }) {
  const { id } = await params;
  const user = await viewUser(id);
  const plainUser = JSON.parse(JSON.stringify(user));

  return (
    <section>
      <EditForm user={plainUser} id={id} />
    </section>
  );
}

export default EditProfile;
