import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AshtangaTeacher from "../../../assets/ashtanga-teacher.jpeg";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AshtangaTeacherCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Joseph Miles" subheader="Ashtanga Yoga" />
      <CardMedia
        component="img"
        height="194"
        image={AshtangaTeacher}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Joseph Miles is a seasoned Ashtanga yoga teacher known for his
          dedicated and disciplined approach to the traditional Ashtanga series
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            With over fifteen years of practice and teaching, Joseph has
            developed a deep understanding of this dynamic and physically
            demanding style of yoga. He emphasizes the importance of precision
            and alignment in each pose, building strength, stamina, and
            flexibility through a methodical progression of postures. Joseph is
            committed to preserving the purity of Ashtanga's ancient techniques
            while adapting them to suit modern practitioners. His classes are
            challenging yet accessible, designed to empower students to push
            their limits safely and with purpose. Joseph’s passion for Ashtanga
            yoga shines through as he leads his students towards physical and
            mental resilience, making every class a journey of self-discovery
            and personal growth.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AshtangaTeacherCard;
