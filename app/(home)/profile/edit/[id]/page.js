import EditForm from "@/components/EditForm";

async function EditProfile({ params }) {
  const { id } = await params;

  return (
    <section>
      <EditForm />
    </section>
  );
}

export default EditProfile;
