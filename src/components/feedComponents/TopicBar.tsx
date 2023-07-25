import { Container, Tab, Tabs } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  return (
    <Container sx={{ backgroundColor: theme.palette.background.default }}>
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        value={null}
        onChange={() => null}
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            color: theme.palette.text.primary,
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {topics.map((topic) => (
          <Tab key={topic} label={topic} />
        ))}
      </Tabs>
    </Container>
  );
}

export default TopicBar;
