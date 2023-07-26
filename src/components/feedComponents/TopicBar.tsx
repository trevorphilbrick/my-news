import { Container, Divider, Tab, Tabs } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";
import { useState, SyntheticEvent } from "react";

const topics = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const recentTopics = ["Cryptocurrency", "Russia", "Covid-19"];

function TopicBar() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  return (
    <Container
      sx={{ backgroundColor: theme.palette.background.default, zIndex: -100 }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        value={value}
        onChange={(_e: SyntheticEvent, newValue: number) => setValue(newValue)}
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
        <Divider orientation="vertical" flexItem variant="middle" />
        {recentTopics.map((topic) => (
          <Tab key={topic} label={topic} />
        ))}
      </Tabs>
    </Container>
  );
}

export default TopicBar;
