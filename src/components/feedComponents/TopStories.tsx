import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Article } from "../../zustand/fetchTopics";
import { Topic } from "../../zustand/fetchTopics";
import useMockData from "../../zustand/mockData";
import mockGeneralCall from "../../mocks/mockGeneralCall.json";

// TODO: refactor top level container and grid to house both top stories and sidebar

function TopStories() {
  const [topicData, setTopicData] = useState<Topic>();
  const { isUsingMockData } = useMockData((state) => state);

  const apiKey = "0da7612e9e1a6f2ded0664ff4c950d54";

  const fetchStories = async (topicId: string) => {
    if (isUsingMockData) {
      setTopicData(mockGeneralCall as Topic);
      return;
    } else {
      const response = await fetch(
        ` https://gnews.io/api/v4/top-headlines?category=${
          topicId || "general"
        }&lang=en&apikey=${apiKey}`
      );

      const data = (await response.json()) as Topic;
      console.log(data);
      setTopicData(data);
    }
  };

  useEffect(() => {
    void fetchStories("general");
  });
  return (
    <Grid item xs={12} md={7}>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={topicData?.articles[0].image || "../images/placeholder.png"}
          title={topicData?.articles[0].title}
          component={"img"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {topicData ? topicData.articles[0].title : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {topicData ? topicData.articles[0].description : null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
      <Grid container spacing={2}>
        {topicData?.articles
          ?.filter((_item, index) => index !== 0)
          .map((article: Article, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ position: "relative" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {article.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}

export default TopStories;
