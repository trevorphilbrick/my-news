import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Article } from "../../types/GNewsAPI";
import { Topic } from "../../types/GNewsAPI";
import useMockData from "../../zustand/mockData";
import mockGeneralCall from "../../mocks/mockGeneralCall.json";

// TODO: refactor top level container and grid to house both top stories and sidebar

function TopStories() {
  const [topicData, setTopicData] = useState<Topic>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const { isUsingMockData } = useMockData((state) => state);

  const apiKey = "0da7612e9e1a6f2ded0664ff4c950d54";

  const skeletonLoaderHeights = [190, 200, 180, 200, 180, 180, 200, 160];

  const fetchStories = async (topicId: string) => {
    setIsLoading(true);
    if (isUsingMockData) {
      setTopicData(mockGeneralCall as Topic);
      setIsLoading(false);
      return;
    } else {
      const response = await fetch(
        ` https://gnews.io/api/v4/top-headlines?category=${
          topicId || "general"
        }&lang=en&apikey=${apiKey}`
      ).catch((error) => {
        console.log(error);
        setIsError(true);
      });

      const data = (await response.json()) as Topic;
      console.log(data);
      setTopicData(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories("general");
  }, []);

  const handleReadMore = (article: Article) => {
    window.open(article.url, "_blank");
  };

  return (
    <Grid item xs={12} md={7}>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          sx={{ height: 200, width: "100%", mb: 2 }}
          animation="wave"
        />
      ) : isError ? (
        <Typography>Unable to load, try refreshing the page...</Typography>
      ) : (
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
            {topicData ? (
              <Button
                size="small"
                onClick={() => handleReadMore(topicData?.articles[0])}
              >
                Read More
              </Button>
            ) : null}
          </CardActions>
        </Card>
      )}
      <Grid container spacing={2}>
        {isLoading
          ? skeletonLoaderHeights.map((height, index) => {
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Skeleton
                    key={index}
                    variant="rounded"
                    sx={{ height: height, width: "100%" }}
                    animation="wave"
                  />
                </Grid>
              );
            })
          : isError
          ? null
          : topicData?.articles
              ?.filter((_item, index) => index !== 0)
              .map((article: Article, index) => {
                return (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ position: "relative" }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={article.image || "../images/placeholder.png"}
                        title={article.title}
                        component={"img"}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          fontWeight={600}
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
                        <Button
                          size="small"
                          onClick={() => handleReadMore(article)}
                        >
                          Read More
                        </Button>
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
