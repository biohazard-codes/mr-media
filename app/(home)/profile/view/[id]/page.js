import { viewUser } from "@/app/backend/db/actions/signup";
import ProfileClient from "@/components/ProfileClient";
import { getPostsByAuthor } from "@/app/backend/db/actions/post";

async function Profile({ params }) {
  const { id } = await params;
  const user = await viewUser(id);
  const plainUser = JSON.parse(JSON.stringify(user));

  const posts = await getPostsByAuthor(id);

  return (
    <section>
      <ProfileClient user={plainUser} id={id} posts={posts} />
    </section>
  );
}

export default Profile;
