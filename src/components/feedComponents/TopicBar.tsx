import { Container, Tab, Tabs } from "@mui/material";

const topics = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

function TopicBar() {
  return (
    <Container>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={null}
        onChange={() => null}
      >
        {topics.map((topic) => (
          <Tab key={topic} label={topic} />
        ))}
      </Tabs>
    </Container>
  );
}

export default TopicBar;
