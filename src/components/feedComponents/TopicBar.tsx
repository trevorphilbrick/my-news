import { Container, Tab, Tabs, Input } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";
import { useState, SyntheticEvent, useEffect } from "react";
import useArticleStore from "../../zustand/articleStore";
import SearchIcon from "@mui/icons-material/Search";

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
  const [value, setValue] = useState("general");
  const [inputValue, setInputValue] = useState("");
  const setCurrentTopic = useArticleStore((state) => state.setCurrentTopic);

  useEffect(() => {
    setCurrentTopic(value);
  }, [value]);

  const allTopics = topics.concat(recentTopics);

  const handleInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setCurrentTopic(inputValue);
    setInputValue("");
  };

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default,
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        value={value}
        onChange={(_e: SyntheticEvent, newValue: string) => setValue(newValue)}
        sx={{
          marginRight: [0, 0, 3],
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
      <form onSubmit={handleInputSubmit}>
        <Input
          placeholder="Search"
          startAdornment={<SearchIcon sx={{ mr: 1 }} />}
          sx={{ width: 240 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
}

export default TopicBar;
