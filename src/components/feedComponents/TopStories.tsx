import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Article } from "../../zustand/fetchTopics";
import { Topic } from "../../zustand/fetchTopics";

function TopStories() {
  const [topicData, setTopicData] = useState<Topic>();

  const apiKey = "0da7612e9e1a6f2ded0664ff4c950d54";

  const fetchStories = async (topicId: string) => {
    const response = await fetch(
      ` https://gnews.io/api/v4/top-headlines?category=${
        topicId || "general"
      }&lang=en&apikey=${apiKey}`
    );

    const data = (await response.json()) as Topic;
    console.log(data);
    setTopicData(data);
  };

  useEffect(() => {
    void fetchStories("general");
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={topicData?.articles[0].image}
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
          </Card>
          <Grid container spacing={2}>
            {topicData?.articles?.map((article: Article) => {
              return (
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: 200 }}>
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
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TopStories;
