import { Grid, Container } from "@mui/material";
import TopStories from "./feedComponents/TopStories";
import TopicBar from "./feedComponents/TopicBar";
import Sidebar from "./feedComponents/Sidebar";

function Feed() {
  return (
    <div>
      <TopicBar />
      <Container>
        <Grid container spacing={2}>
          <TopStories />
          <Sidebar />
        </Grid>
      </Container>
    </div>
  );
}

export default Feed;
