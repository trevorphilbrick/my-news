import { Container, Divider, Tab, Tabs } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";
import { useState, SyntheticEvent, useEffect } from "react";
import useArticleStore from "../../zustand/articleStore";

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
  const setCurrentTopic = useArticleStore((state) => state.setCurrentTopic);

  useEffect(() => {
    setCurrentTopic(value);
  }, [value]);

  const allTopics = topics.concat(recentTopics);

  return (
    <Container
      sx={{ backgroundColor: theme.palette.background.default, mb: 4 }}
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
        {allTopics.map((topic) => (
          <Tab
            key={topic}
            label={topic}
            value={topic}
            sx={{ color: theme.palette.text.primary }}
          />
        ))}
      </Tabs>
    </Container>
  );
}

export default TopicBar;
