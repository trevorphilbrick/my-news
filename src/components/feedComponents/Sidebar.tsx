import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mockGeneralCall from "../../mocks/mockGeneralCall.json";

function Sidebar() {
  return (
    <Grid item xs={12} md={5}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Read Again</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {mockGeneralCall.articles.map((article) => (
            <Card sx={{ mb: 2 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={article.image || "../images/placeholder.png"}
                title={article.title}
                component={"img"}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Saved Articles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {mockGeneralCall.articles.map((article) => (
            <Card sx={{ mb: 2 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={article.image || "../images/placeholder.png"}
                title={article.title}
                component={"img"}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          ))}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default Sidebar;
