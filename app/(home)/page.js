"use server";
import HomeFeed from "@/components/HomeFeed";
import { allPosts } from "../backend/db/actions/post";
export const dynamic = "force-dynamic";
async function Home() {
  const Posts = await allPosts();

  return (
    <>
      <h1 className="font-medium text-3xl text-left mb-4 md:mb-10 md:mt-8 mt-16 pl-2 md:ml-140">
        Home Feed
      </h1>
      <div className="flex  flex-col items-center">
        {Posts.map((p) => (
          <HomeFeed
            key={p.id}
            id={p.id}
            firstName={p.author.firstName}
            userName={`@${p.author.userName}`}
            caption={p.caption}
            tags={p.tags}
            image={p.image}
            profileImage={p.author.image}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
