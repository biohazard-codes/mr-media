import HomeFeed from "@/components/HomeFeed";
function Home() {
  return (
    <>
      <h1 className="font-medium text-3xl text-left mb-4 md:mb-10 md:mt-8 mt-16 pl-2 md:ml-140">
        Home Feed
      </h1>
      <div className="flex  flex-col items-center">
        <HomeFeed image="/mr.png" />

        <HomeFeed image="/post2.png" />

        <HomeFeed image="/landscape.png" />
      </div>
    </>
  );
}
export default Home;
