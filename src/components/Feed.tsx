import NavBar from "./feedComponents/NavBar";
import TopStories from "./feedComponents/TopStories";
import TopicBar from "./feedComponents/TopicBar";

function Feed() {
  return (
    <div>
      <NavBar />
      <TopicBar />
      <TopStories />
    </div>
  );
}

export default Feed;
