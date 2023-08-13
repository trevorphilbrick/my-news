import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Grid,
  Skeleton,
  Tooltip,
} from "@mui/material";
import { Article } from "../../types/GNewsAPI";
import useFetchTopStories from "../../hooks/useFetchStories";
import { useTheme } from "@mui/material";
import { useEffect } from "react";

// TODO: refactor top level container and grid to house both top stories and sidebar

function TopStories() {
  const theme = useTheme();
  const { currentArticles, isLoading, error, errorMessage } =
    useFetchTopStories();

  const skeletonLoaderHeights = [190, 200, 180, 200, 180, 180, 200, 160];

  useEffect(
    () => console.log({ currentArticles, isLoading, error, errorMessage }),
    [currentArticles, isLoading, error]
  );

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
      ) : error === true ? (
        <>
          <Typography color={theme.palette.text.primary} variant="h4">
            Unable to load, try refreshing the page...
          </Typography>
          <Typography color={theme.palette.text.primary}>
            Error message- {errorMessage.toString()}
          </Typography>
        </>
      ) : (
        <Card sx={{ mb: 2 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={currentArticles[0]?.image || "../images/placeholder.png"}
            title={currentArticles[0]?.title}
            component={"img"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentArticles ? currentArticles[0]?.title : null}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentArticles ? currentArticles[0]?.description : null}
            </Typography>
          </CardContent>
          <CardActions>
            {currentArticles ? (
              <Button
                size="small"
                onClick={() => handleReadMore(currentArticles[0])}
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
          : error
          ? null
          : currentArticles
              ?.filter((_item, index) => index !== 0)
              .map((article: Article, index) => {
                return (
                  <Grid item xs={12} sm={6} key={index}>
                    <Tooltip title={article.description}>
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
                    </Tooltip>
                  </Grid>
                );
              })}
      </Grid>
    </Grid>
  );
}

export default TopStories;
