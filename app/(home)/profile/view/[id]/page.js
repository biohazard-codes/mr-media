import { viewUser } from "@/app/backend/db/actions/signup";
import ProfileClient from "@/components/ProfileClient";

async function Profile({ params }) {
  const sla = "hsi";
  const { id } = await params;
  const user = await viewUser(id);
  const plainUser = JSON.parse(JSON.stringify(user));

  return (
    <section>
      <ProfileClient user={plainUser} id={id} />
    </section>
  );
}

export default Profile;
