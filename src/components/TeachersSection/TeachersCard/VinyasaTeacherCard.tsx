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

import VinyasaTeacher from "../../../assets/teacher-vinyasa.jpeg";
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

const VinyasaTeacherCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Maya Thompson" subheader="Vinyasa Yoga" />
      <CardMedia
        component="img"
        height="194"
        image={VinyasaTeacher}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Meet Maya Thompson, a dedicated Vinyasa yoga instructor with over a
          decade of experience guiding students through the dynamic and flowing
          sequences of Vinyasa practice.
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
            Maya's teaching style is deeply rooted in her belief that yoga is a
            transformative journey that connects the mind, body, and spirit.
            With a focus on breath-synchronized movements, she expertly helps
            her students achieve balance and harmony, enhancing their physical
            flexibility and mental clarity. Maya is passionate about creating an
            inclusive and supportive environment, encouraging each student to
            explore their potential and embrace the path to inner peace and
            wellness. Whether in the studio or online, Maya's classes are a
            sanctuary for growth, reflection, and connection.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default VinyasaTeacherCard;
