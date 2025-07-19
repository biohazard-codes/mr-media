import HomeFeed from "@/components/HomeFeed";
function Home() {
  return (
    <>
      <div className="flex mt-10 flex-col items-center">
        <HomeFeed image="/mr.png" />

        <HomeFeed image="/post2.png" />

        <HomeFeed image="/landscape.png" />
      </div>
    </>
  );
}
export default Home;
