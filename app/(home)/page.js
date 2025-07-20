import HomeFeed from "@/components/HomeFeed";
function Home() {
  return (
    <>
      <div className="flex md:mt-10 mt-20 flex-col items-center">
        <HomeFeed image="/mr.png" />

        <HomeFeed image="/post2.png" />

        <HomeFeed image="/landscape.png" />
      </div>
    </>
  );
}
export default Home;
